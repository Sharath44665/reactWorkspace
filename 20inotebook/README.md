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

## inserting bcryptjs and jsonwebtoken (jwt)

in auth.js

``` js 
// some code here
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "my demo secret !!!"

// some code here

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
        const jwtData = jwt.sign(data, JWT_SECRET);
        console.log(jwtData)
        return res.status(200).json({ msg: 'success', logged_user: user })
    }
// some code here

```

output: 

console.log will gives something like this:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc3NjNmNzdlMTNlMGE2NzNiMTBmZTRkIn0sImlhdCI6MTczNTgwMjc0M30._lvO5_U8Nxj8IH_998saNGSP7yBiv4FXuHwWhSKzlTE
```

![sendingJsonWebToken.png](./img/sendingJsonWebToken.png)

## get user from token

check codes in 
- auth.js
- fetchUser.js

when incorrect token:

![authtokenGetUser.png](./img/authtokenGetUser.png)

when its correct token:

![authtokenGetUser2.png](./img/authtokenGetUser2.png)

## adding notes and fetching all notes

changes are made in 
- model/Notes.js
- backend/notes.js


add headers: 

![addNoteHeaders.png](./img/addNoteHeaders.png)

add Notes (body):

![addNoteBody.png](./img/addNoteBody.png)

show all notes:
- thunder client body is not required
- auth-token is required

![allNotes.png](./img/allNotes.png)

## updating notes

changes made in `backend/notes.js`

headers: 

![200~updateNoteErrorOne.png](./img/updateNoteErrorOne.png)

error1:

![updateNoteErrorOne2.png](./img/updateNoteErrorOne2.png)

error2:

![updateNoteErrorOne3.png](./img/updateNoteErrorOne3.png)

success:

![updateNoteSuccess.png](./img/updateNoteSuccess.png)

## deleting notes

changes to be made in `routes/notes.js`

![deleteNotes_inotebook.png](./img/deleteNotes_inotebook.png)





