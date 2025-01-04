const express = require('express');
const fetchuser = require('../middleware/fetchUser');
const Notes = require('../model/Notes.js')
const router = express.Router();
const { body, validationResult } = require('express-validator');

// all notes GET
router.get('/all', fetchuser, async (req, res) => {
    try {

        const notes = await Notes.find({ user: req.userFound.id })
        res.json({ msg: 'success', data: notes })
    }
    catch (error) {
        console.log(error);
        res.status(500).send("its not you, its our server error");
    }
})

// POST create note
router.post('/addnote', fetchuser, [
    body('title').isLength({ min: 3 }).withMessage("minimum 3 charecters required"),
    body('description').isLength({ min: 5 }).withMessage("minimum password length is 5"),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const note = new Notes({
            title, description, tag, user: req.userFound.id
        })

        const savedNote = await note.save()
        res.json(savedNote)
    }
    catch (error) {
        console.log(error);
        res.status(500).send("its not you, its our server error");
    }
})


// PUT update notes

router.put('/update/:id', fetchuser, async (req, res) => {
    try {

        const { title, description, tag } = req.body;
        let newNote = {}

        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        console.log(newNote);

        // console.log(req.params.id)
        let note = await Notes.findById(req.params.id) // id coming from '/update:id'

        // notes doesnot exist
        if (!note) {
            return res.status(404).json({ error: "notes not found" })
        }

        // if user doesnot match with notes.user 
        if (note.user.toString() !== req.userFound.id) {
            return res.status(401).json({ errorMsg: 'not allowed' })
        }


        // note = await Notes.findByIdAndUpdate( req.params.id, { $set: newNote }, { new:true } )
        console.log('--------------')
        console.log(newNote)
        note = await Notes.findByIdAndUpdate(req.params.id, newNote, { new: true })

        res.json({ msg: 'update success.', data: note })
    } 
    catch (error) {
        console.log(error)
        res.status(500).json(
            {
                "server_error": "its not you, its our server error",
                errorMsg: error.message
            });

    }
})

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try{

        let demonote = await Notes.findById(req.params.id);
    
        if (!demonote){
            return res.status(404).json({msg: 'notes not found'})
        }
    
        // trying to access someone elses notes
        if (demonote.user.toString() !== req.userFound.id){
            return res.status(401).json({msg: 'you are not authorized'})
        }
        
        demonote = await Notes.findByIdAndDelete(req.params.id);
        res.json({msg: "deleted successfully", data: demonote})
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: 'server error', data: error.message})
    }

});
module.exports = router