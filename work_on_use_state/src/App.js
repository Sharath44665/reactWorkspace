import { useState } from "react";


function App(){
    // function makeList(){
    //     return [10,20,30, 40];
    // }

    // const getArray = makeList();
    // const firstVal = getArray[0];
    // const secondVal = getArray[1];

    // above 3 lines of code can be written as below
    // const[ firstVal, secondVal] = makeList();

    // console.log(firstVal, secondVal);

    console.log(useState(0))

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
