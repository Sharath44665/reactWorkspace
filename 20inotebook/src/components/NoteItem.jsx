import React from 'react'

function NoteItem(props) {
    const { note } = props
    return (
        <div className='col my-3'>
            <div className="card" style={{ 'width': '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}
                        <a href='#'>
                            <i className="bi bi-pencil-square mx-2"></i>
                        </a>
                        <a href='#'>
                            <i className="bi bi-trash3"></i>
                        </a>
                    </h5>

                    <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
                    <p className="card-text">{note.description}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>

        </div>
    )
}

export default NoteItem