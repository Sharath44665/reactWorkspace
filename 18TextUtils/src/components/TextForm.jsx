import { useState } from "react"


export default function TextForm(props){

    const handleUpperClick = () => {
       
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    const [text, setText] = useState("enter text here");
    return (
        <div>
            <h2>{props.heading} </h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary" onClick={handleUpperClick}  >Convert to UPPERCASE</button>
        </div>
    )
}