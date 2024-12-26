const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    obj ={
        msg: 'success',
        demo: 'demo msg'
    }

    res.json(obj)
})

module.exports = router