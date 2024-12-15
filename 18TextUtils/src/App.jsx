// Fix a broken clock - clock.js

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App(){
  return(
    <>
      <Navbar title="Text Utils" aboutText="about_text_utils" />
      <div className="container">
        <TextForm heading="Enter ur text to analyze" />
      </div>
      

    </>
  );
}

export default App;


