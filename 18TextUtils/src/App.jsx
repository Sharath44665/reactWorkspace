// Fix a broken clock - clock.js

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App(){
  const [isDark, setIsDark] = useState("light");
  // let useTheme = "light"
  
  const darkMode = () => {
    if (isDark === 'light'){
      setIsDark('dark')
      document.body.style.backgroundColor ='#282929'
      document.body.style.color = 'white';
    }
    else{
      setIsDark('light')
      document.body.style.backgroundColor ='white'
      document.body.style.color = 'black';
      
    }
  }

  return(
    <>
      <Navbar title="Text Utils" aboutText="about_text_utils" theme={isDark} toggleTheme={darkMode} />
      <div className="container">
        <TextForm heading="Enter ur text to analyze" theme={isDark} />
        {/* <About />  */}
      </div>

      
      

    </>
  );
}

export default App;


