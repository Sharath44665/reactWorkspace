
import NoteContext from "./NoteContext";

// dont forget to check the commits
const NoteState = (props) => {
    
    return (
        <NoteContext.Provider value={{}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;