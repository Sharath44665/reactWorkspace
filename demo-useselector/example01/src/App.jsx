
import { Provider, useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Store } from './Store';  

const Counter = () => {
  const count = useSelector((state) => { 
    return state.numberCounter.count
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>counter = {count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  )
}

function App() { 
  return ( 
      <Provider store={Store}>
        <div>
          <h1>Redux useSelector Example</h1>
          <Counter /> 
        </div>
      </Provider> 
  )
}

export default App
