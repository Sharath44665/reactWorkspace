import React from 'react';
import ReactDOM from 'react-dom/client';


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

// create component
function App(){
  return <h1>Hello world</h1>
}

// show component
root.render(<App/>);