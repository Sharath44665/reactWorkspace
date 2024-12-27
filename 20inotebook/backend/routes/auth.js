const { body, validationResult } = require('express-validator');
const express = require('express');
const router = express.Router();
const User = require('../model/User.js')


router.post('/', [
    body('name').isLength({ min: 3 }).withMessage("minimum 3 charecters required"),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
], (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.status(200).json({ success: 'Successful Sign Up!' });

    // res.send(req.body)
})

module.exports = router