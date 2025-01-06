import contextValue from '../context/notes/NoteContext.jsx';
import React, { useContext } from 'react'
import NoteItem from './NoteItem.jsx';
import AddNote from './AddNote.jsx';
import NoteContext from '../context/notes/NoteContext.jsx';

function Notes() {
    const context = useContext(NoteContext);

    const { notes, addNote } = context;
    return (
        <>
        <AddNote />
        <>
        
        <div className='row my-3'>
            <h2>Your notes</h2>
            {
                notes.map((note) => {
                    return <NoteItem key={note._id} note = {note} />;
                })
            }
        </div>
        </>
        </>
        
    )
}

export default Notes