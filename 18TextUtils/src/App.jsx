// Fix a broken clock - clock.js

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import MyAlert from './components/MyAlert';
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";

function App(){
  const [isDark, setIsDark] = useState("light");
  const [getAlert, setCreateAlert] = useState(null);
 

  const createMyAlert = (message, type) => {
    setCreateAlert({
      msg: message,
      type:type,
    })
    setTimeout(() => {
      setCreateAlert(null)
    }, 2000);
  }
  
  const darkMode = () => {
    if (isDark === 'light'){
      setIsDark('dark')
      document.body.style.backgroundColor ='#282929'
      document.body.style.color = 'white';
      createMyAlert("dark mode enabled", 'success')
    }
    else{
      setIsDark('light')
      document.body.style.backgroundColor ='white'
      document.body.style.color = 'black';
      createMyAlert("light mode enabled", 'success')
      
      
    }
  }

  return(
    <>
      <Navbar title="Text Utils" aboutText="about_text_utils" theme={isDark} toggleTheme={darkMode} />
      <div className="container">
        <MyAlert descriptionAlert={getAlert} />
        {/* <TextForm heading="Enter ur text to analyze" theme={isDark} setCustomAlert={createMyAlert} /> */}
        <Routes>
        <Route index element={<TextForm heading="Enter ur text to analyze" theme={isDark} setCustomAlert={createMyAlert} />} />
        <Route path="about" element={<About />} />
        </Routes>
        {/* <About />  */}
      </div>

      
      

    </>
  );
}

export default App;


