
import { Provider, useDispatch, useSelector } from 'react-redux'
import './App.css'  
import { store } from './Store';
import UserProfile from './Components/UserProfile';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
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
      <Provider store={store}>
        <div> 
          <h1>Redux Auth example</h1>
          <UserProfile />
        </div>
      </Provider> 
  )
}

export default App
