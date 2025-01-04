import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const state = {
        "name": "sharath",
        "class" : "7a"
    }
    return (
        <NoteContext.Provider value={state} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;