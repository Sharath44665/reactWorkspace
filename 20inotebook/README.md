# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Connect to db and start thunder client in vs code:

- mongo db start:

![mongodb_start](./img/mongodb_start.png)

- check thuder clinet

![thunder_clinet](./img/thunder_client_start.png)

## simple validation example 

please check the `package.json`

auth.js

``` js
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
```

![express validation demo](./img/express_validation_demo.png)




