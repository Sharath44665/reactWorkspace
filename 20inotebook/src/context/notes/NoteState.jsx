import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "sharath",
        "class": "7a"
    }

    const [state, setState] = useState(s1)

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "dem user",
                "class": "10b"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state, update}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;