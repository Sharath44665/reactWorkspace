import contextValue from '../context/notes/NoteContext.jsx';
import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteItem from './NoteItem.jsx';
import AddNote from './AddNote.jsx';
import NoteContext from '../context/notes/NoteContext.jsx';

function Notes() {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context

    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    const updateNote = (note) => {
        ref.current.click()
    }

    const ref = useRef(null)

    const [note, setNote] = useState({ title: "", description: "", tag: "default" });

    const handleClick = (e) => {
        e.preventDefault();
        
        
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
                                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} placeholder="optional" />
                                </div>
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
            <>

                <div className='row my-3'>
                    <h2>Your notes</h2>
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