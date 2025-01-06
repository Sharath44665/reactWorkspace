import contextValue from '../context/notes/NoteContext.jsx';
import React, { useContext } from 'react'
import NoteItem from './NoteItem.jsx';

function Notes() {
    const context = useContext(contextValue);

    const { notes, setNotes } = context;
    return (
        <div className='row my-3'>
            <h2>Your notes</h2>
            {
                notes.map((note) => {
                    return <NoteItem note = {note} />;
                })
            }
        </div>
    )
}

export default Notes