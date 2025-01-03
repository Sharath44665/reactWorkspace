const express = require('express');
const fetchuser = require('../middleware/fetchUser');
const Notes = require('../model/Notes.js')
const router = express.Router();

// all notes GET
router.get('/all', fetchuser, async (req, res) => {
    const notes = await Notes.find({user:req.userFound.id})
    
    res.json({msg: 'success', data: [notes]})
})

module.exports = router