
import { Provider } from 'react-redux'
import './App.css' 
import TodoList from './Components/TodoList';
import { store } from './Store';


function App() {


  return ( 
      <Provider store={store}>
        <div> 
          <h1>Redux Todo App</h1>
          <TodoList />
        </div>
      </Provider> 
  )
}

export default App
