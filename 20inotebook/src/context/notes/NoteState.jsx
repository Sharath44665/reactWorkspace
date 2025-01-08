import { useState } from "react";
import NoteContext from "./NoteContext";

// dont forget to check the commits
const NoteState = (props) => {
    const host = 'http://localhost:3000';
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRm91bmQiOnsiaWQiOiI2NzdkMTZjNDY0NWRlYmI4MzU0MTFhMjcifSwiaWF0IjoxNzM2MzIwNjUyfQ.9sVV9FBZgowTcG7YRuEnA_VVcraoo3g2MmXOzIAPmTc'

            }
        });
        const json = await response.json()
        // console.log(json.data)
        setNotes(json.data)
    }

   

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

    const editNote =(id, title, description, tag) =>{
        
    }
    
    const deleteNote =(id) =>{
        // TODO: API Call
        console.log(`your id: ${id}`)
        const newNotes = notes.filter( (note) =>  note._id  !==  id ) // return everything except the id selected for deleting
        setNotes(newNotes)
        
    }
    
    return (
        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote, getNotes}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;