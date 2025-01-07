import { useContext } from "react"
import NoteContext from "../context/notes/NoteContext"

function NoteItem(props) {
    const context = useContext(NoteContext)
    const { deleteNote } = context
    const { note } = props;
    return (
        <div className='col my-3'>
            <div className="card my-3" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}

                        <i className="bi bi-pencil-square mx-2"></i>


                        <i className="bi bi-trash3" onClick={() => {
                            return deleteNote(note._id)
                        }}></i>

                    </h5>

                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        <i className="bi bi-tag mx-2"></i>
                        {note.tag}
                    </h6>
                    <p className="card-text">{note.description}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>

        </div>
    )
}

export default NoteItem