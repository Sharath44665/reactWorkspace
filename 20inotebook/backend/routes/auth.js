const { body, validationResult } = require('express-validator');
const express = require('express');
const router = express.Router();
const User = require('../model/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "my demo secret !!!"
router.post('/signin', [
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

module.exports = router