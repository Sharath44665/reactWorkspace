function App(){
    // function afterClick(){
    //     console.log("button was clicked");
    // }

    // above code can be written as follows
    const afterClick =() => { // which is same as: const afterClick = function(){
        console.log(" first button clicked");
    }

    return (
        <div>
            <button onClick={afterClick} > first Button</button>
            <button onClick={()=> console.log("secondbutton clicked")}>second button</button>
            {/* above here paranthesis not used in function call 
            because waits for users to make a event, 
            assuming that this : afterClick() with parenthisis, will be invoked as soon as 
            App.js was rendered to index.js   */}
        </div>
        
    );
}

export default App;