const { body, validationResult } = require('express-validator');
const express = require('express');
const router = express.Router();
const User = require('../model/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser.js');

const JWT_SECRET = "my demo secret !!!"

// create user route
router.post('/createuser', [
    body('name').isLength({ min: 3 }).withMessage("minimum 3 charecters required"),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }).withMessage("minimum password length is 5"),
], async (req, res) => {
    // console.log(req.body);
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let user = await User.findOne({ email: req.body.email })

        if (user) {
            return res.status(400).json({ error: 'sorry this emailId already exist in our db' })
        }

        const salt = await bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        const data = {
            user : {
                id : user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        
        return res.status(200).json({ msg: 'success', authToken: authToken})
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'something went wrong' })
    }
    // res.send(req.body)
})


// login user route
router.post( '/login', [
    body('email').isEmail().withMessage('email cannot be blank'),
    body('password').exists().withMessage('password cannot be blank'),
    ], async (req, res) => {
        const errors = validationResult(req)

        

        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        
        const {email, password} = req.body;
        try {
            let userOne = await User.findOne({email});

            if (!userOne){
                return res.status(400).json({error_msg: "hello... put a right credentials"})
            }

            const passwordCompare = await bcrypt.compare(password, userOne.password)

            if (!passwordCompare){
                return res.status(400).json({error_msg: "hello... put a right credentials"})
            }


            const data = {
                userFound : {
                    id: userOne.id
                }
            }

            const authToken = jwt.sign(data, JWT_SECRET)
            res.json({msg: 'success',authToken})
        } 
        catch(error){
            console.log(error)
            res.status(500).send("its not you, its our server error")
        }

        
    })

// getuser router
router.post('/getuser', fetchUser, async (req, res) => {
    try{
        const userid = req.userFound.id;
        const userdata = await User.findById(userid).select('-password') // only exclude password and select everything
        res.send(userdata)
    }
    catch(error){
        console.log(error);
        res.status(500).send("its not you, its our server error");
    }
})

module.exports = router