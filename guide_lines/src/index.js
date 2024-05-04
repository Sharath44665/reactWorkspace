import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root= ReactDOM.createRoot(el);

function App(){
    // return <input type="number"/>;
    // const inputType = 'number';
    // const minVal = 5;

    // return <input style={{border:"3px solid red"}} type={inputType} min={minVal} />;

    // rule: follow camel case at props 
    // return <textarea autoFocus={true} />

    // rule: dont pass in string
    // return <input maxLength={10} />;

    // return <input spellCheck />; // by default its true, make spellCheck = {false}

    // rule to pass objects
    return <input style={{border:"3px solid blue", backgroundColor:"lightgray"}} />;
}

root.render(<App/>);