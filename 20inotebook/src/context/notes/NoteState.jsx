import { useState } from "react";
import NoteContext from "./NoteContext";
import js from "@eslint/js";

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



    const addNote = async (title, description, tag) => {

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRm91bmQiOnsiaWQiOiI2NzdkMTZjNDY0NWRlYmI4MzU0MTFhMjcifSwiaWF0IjoxNzM2MzIwNjUyfQ.9sVV9FBZgowTcG7YRuEnA_VVcraoo3g2MmXOzIAPmTc'

            },

            body: JSON.stringify({ title, description, tag }) // i think, this taking inputs from text box
        });

        const json = await response.json()
        // console.log('adding a new note')
        const note =  json;
        // console.log(note)
        setNotes(notes.concat(note))
        // setNotes(note)

    }


    const editNote = async (id, title, description, tag) => {
        // API Call 
        const response = await fetch(`${host}/api/notes/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRm91bmQiOnsiaWQiOiI2NzdkMTZjNDY0NWRlYmI4MzU0MTFhMjcifSwiaWF0IjoxNzM2MzIwNjUyfQ.9sVV9FBZgowTcG7YRuEnA_VVcraoo3g2MmXOzIAPmTc"
            },
            body: JSON.stringify({ title, description, tag })
        });


        // const json = await response.json();
        // console.log(json)

        let newNotes = JSON.parse(JSON.stringify(notes))

        for (let idx = 0; idx < newNotes.length; idx += 1) {

            const element = newNotes[idx]

            if (element._id === id) {

                newNotes[idx].title = title;
                newNotes[idx].description = description;
                newNotes[idx].tag = tag;
                break
            }
        }
        setNotes(newNotes)
    }

    const deleteNote = async (id) => {
        // TODO: API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRm91bmQiOnsiaWQiOiI2NzdkMTZjNDY0NWRlYmI4MzU0MTFhMjcifSwiaWF0IjoxNzM2MzIwNjUyfQ.9sVV9FBZgowTcG7YRuEnA_VVcraoo3g2MmXOzIAPmTc'

            },


        });

        const json = response.json();
        // console.log('delete note from id: ---')
        // console.log(json)
        const newNotes = notes.filter((note) => note._id !== id) // return everything except the id selected for deleting
        setNotes(newNotes)

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes }} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;