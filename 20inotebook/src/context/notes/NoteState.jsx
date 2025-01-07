import { useState } from "react";
import NoteContext from "./NoteContext";

// dont forget to check the commits
const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "677b946ebc66cd668f5e2884",
            "user": "6777e08b593ad2450851ce49",
            "title": "sharath note",
            "description": "this is a sample note description of sharath note",
            "tag": "first mongodb",
            "date": "2025-01-06T08:29:34.674Z",
            "__v": 0
        },
        {
            "_id": "677b9486bc66cd668f5e2887",
            "user": "6777e08b593ad2450851ce49",
            "title": "sharath second note",
            "description": "this is a second sample note description of sharath note",
            "tag": "first mongodb",
            "date": "2025-01-06T08:29:58.116Z",
            "__v": 0
        },
        {
            "_id": "677b9498bc66cd668f5e288a",
            "user": "6777e08b593ad2450851ce49",
            "title": "sharath third note",
            "description": "this is a third sample note description of sharath note",
            "tag": "first mongodb",
            "date": "2025-01-06T08:30:16.360Z",
            "__v": 0
        },
        {
            "_id": "67dd7b9486bc66cd668f5e2887",
            "user": "6777e08b593ad2450851ce49",
            "title": "sharath second note",
            "description": "this is a second sample note description of sharath note",
            "tag": "first mongodb",
            "date": "2025-01-06T08:29:58.116Z",
            "__v": 0
        },
        {
            "_id": "67d7b9498bc66cd668f5e288a",
            "user": "6777e08b593ad2450851ce49",
            "title": "sharath third note",
            "description": "this is a third sample note description of sharath note",
            "tag": "first mongodb",
            "date": "2025-01-06T08:30:16.360Z",
            "__v": 0
        }
    ]


    const [notes, setNotes] = useState(notesInitial)

    const addNote =(title, description, tag) =>{
        // TODO: API Call
        const note = {
            "_id": "67d7b9498bc66cd668f5e288a",
            "user": "6777e08b593ad2450851ce49",
            "title": title,
            "description": description,
            "tag":tag,
            "date": "2025-01-06T08:30:16.360Z",
            "__v": 0
        }
        setNotes(notes.concat(note))

    }

    const editNote =(id) =>{
        
    }
    
    const deleteNote =(id) =>{
        // TODO: API Call
        console.log(`your id: ${id}`)
        const newNotes = notes.filter( (note) =>  note._id  !==  id ) // return everything except the id selected for deleting
        setNotes(newNotes)
        
    }
    
    return (
        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;