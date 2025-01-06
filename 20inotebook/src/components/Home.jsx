import contextValue from '../context/notes/NoteContext.jsx';
import React, {useContext} from 'react'

export const Home = () => {
    const context  = useContext(contextValue);

    const {notes, setNotes} = context;
    return (
        <div>
            <h1>Add a note</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <hr />
            <h2>Your notes</h2>
            {
                notes.map((note) => {
                    return note.title;
                } )
            }
        </div>
    )
}