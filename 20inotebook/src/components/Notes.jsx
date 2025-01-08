import contextValue from '../context/notes/NoteContext.jsx';
import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteItem from './NoteItem.jsx';
import AddNote from './AddNote.jsx';
import NoteContext from '../context/notes/NoteContext.jsx';

function Notes() {
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;

    const [note, setNote] = useState({ id: "",  etitle: "", edescription: "", etag: "default" });
    const ref = useRef(null)
    const closeRef = useRef(null)

    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    

    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({
            id:currentNote._id,
            etitle:currentNote.title, 
            edescription: currentNote.description,
            etag: currentNote.tag
        })
    }

    

    const handleClick = (e) => {
        
        editNote(note.id, note.etitle, note.edescription, note.etag);
        closeRef.current.click();
    }

    const onChange = (e) => {
        
        setNote({ ...note, [e.target.name]: e.target.value })
        
    }

    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label"  >Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.etitle} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} value={note.edescription} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} placeholder="optional" value={note.etag} />
                                </div>
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button  type="button" className="btn btn-primary" onClick={handleClick}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
            <>

                <div className='row my-3'>
                    <h2>Your notes</h2>
                    {notes.length === 0 && 'No notes to display '}
                    {
                        notes.map((note) => {
                            return <NoteItem key={note._id} note={note} updateNote={updateNote} />;
                        })
                    }
                </div>
            </>
        </>

    )
}

export default Notes