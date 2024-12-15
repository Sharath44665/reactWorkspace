// Fix a broken clock - clock.js

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App(){
  return(
    <>
      <Navbar title="Text Utils" aboutText="about_text_utils" />
      <div className="container">
        {/* <TextForm heading="Enter ur text to analyze" /> */}
        <About /> 
      </div>

      
      

    </>
  );
}

export default App;


