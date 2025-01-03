const express = require('express');
const fetchuser = require('../middleware/fetchUser');
const Notes = require('../model/Notes.js')
const router = express.Router();
const { body, validationResult } = require('express-validator');

// all notes GET
router.get('/all', fetchuser, async (req, res) => {
    try{

        const notes = await Notes.find({user:req.userFound.id})
        res.json({msg: 'success', data: notes })
    }
    catch(error){
        console.log(error);
        res.status(500).send("its not you, its our server error");
    }
})

router.post('/addnote', fetchuser, [
    body('title').isLength({ min: 3 }).withMessage("minimum 3 charecters required"),
    body('description').isLength({ min: 5 }).withMessage("minimum password length is 5"),
], async (req, res) => {
    try{
        const {title, description, tag}  = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array() })
        }
        
        const note = new Notes({
            title, description, tag, user: req.userFound.id
        })

        const savedNote = await note.save()
        res.json(savedNote)
    }   
    catch(error){
        console.log(error);
        res.status(500).send("its not you, its our server error");
    }
})

module.exports = router