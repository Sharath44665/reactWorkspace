import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App(){
    // let message = "not hello world";

    // if (Math.random() > 0.5){
    //     message = "Hello there";
    // }

    // return <h1>{message}</h1>;

    // const date = new Date();
    // const time = date.toLocaleTimeString();

    // return <h1>{time}</h1>;

    // or we can write the above same code as below
    return <h1>{new Date().toLocaleTimeString()}</h1>;
    
}

root.render(<App/>);