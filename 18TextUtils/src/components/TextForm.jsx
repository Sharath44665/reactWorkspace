import { useState } from "react"


export default function TextForm(props){

    const handleUpperClick = () => {
       
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleLowerClick = () => {
        const newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        setText("")
    }

    const [text, setText] = useState("enter text here");

    const getWords = (text) => {
        let wordsCounter = text.split(" ").length;
        
        if (text.endsWith(" ") || text == ""){
            return wordsCounter - 1;
        }
        return wordsCounter;
    }
    return (
        <>
        <div>
            <h2>{props.heading} </h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary mx-2" onClick={handleUpperClick}  >Convert to UPPERCASE</button>

            <button className="btn btn-primary mx-2" onClick={handleLowerClick}  >Convert to lowercase</button>
            <button type="button" className="btn btn-secondary mx-2" onClick={handleClearClick} >clear</button>
        </div>
        <div className="container">
            <h2>your text summary:</h2>
            <p>{getWords(text)} words, {text.length} charecters</p>
            <p>{0.008 * getWords(text) } minutes to read</p>

            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
        
    )
}