import { useState } from "react";

function App(){
    const [counter, increaseCounter] = useState(0); // initial value is zero for counter variable

    const afterClick = () => {
        increaseCounter(counter + 1);
    }
    return (
        <div>
            <button onClick={afterClick}>First button</button>
            <div>Number of clicks of :  {counter}</div>
        </div>
    );
}

export default App;