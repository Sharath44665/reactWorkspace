import { useState } from "react"


export default function TextForm(props){

    const handleUpperClick = () => {
        
        if (text === ''){
            props.setCustomAlert(': Hey its empty', 'warning')
        }
        else{
            props.setCustomAlert(': upper case Done', 'success')
        }
        
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleLowerClick = () => {
        if (text === ''){
            props.setCustomAlert(': Hey its empty', 'warning')
        }
        else{
            props.setCustomAlert(': Lower case Done', 'success')
        }
        const newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        setText("")
    }

    const [text, setText] = useState("enter text here");

    const getWords = (text) => {
        let wordsCounter = text.split(/\s+/).filter((element) => element.length !== 0 ).length;
  
        return wordsCounter;
    }
    return (
        <>
        <div>
        
            <h2>{props.heading} </h2>
            
            <div className="mb-3">
                <textarea className="form-control" style={props.theme === 'dark'?{backgroundColor:'#d0e5fa'}:{backgroundColor:'white'} } value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary mx-2 my-1" onClick={handleUpperClick}  >Convert to UPPERCASE</button>

            <button className="btn btn-primary mx-2 my-1" onClick={handleLowerClick}  >Convert to lowercase</button>
            <button type="button" className="btn btn-secondary mx-2" onClick={handleClearClick} >clear</button>
        </div>
        <div className="container">
            <h2>your text summary:</h2>
            <p>{getWords(text)} words, {text.length} charecters</p>
            <p>{0.008 * getWords(text) } minutes to read</p>

            <h2>Preview</h2>
            <p>{text.length >0?text:'enter something to preview'}</p>
        </div>
        </>
        
    )
}