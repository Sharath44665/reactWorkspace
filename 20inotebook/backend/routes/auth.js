const { body, validationResult } = require('express-validator');
const express = require('express');
const router = express.Router();
const User = require('../model/User.js')


router.post('/signin', [
    body('name').isLength({ min: 3 }).withMessage("minimum 3 charecters required"),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }).withMessage("minimum password length is 5"),
], (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

     User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then( usr => {
        // res.status(200).json({ success: 'Successful Sign Up!', data: [req.body]})
        res.json(usr);
    }).catch(err => {
        console.log(err)
        res.json({'error': 'something went wrong', 'msg':err.message})
    });

    // res.send(req.body)
})

module.exports = router