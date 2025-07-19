import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () =>{
    const [todoText, setTodoText] = useState("");
    const todos = useSelector((state)=> state.todos.todos);
    const filter = useSelector((state) => state.todos.filter);
    const dispatch = useDispatch();

    const filteredTodos = todos.filter((todo)=> {
        if (filter === "COMPLETED") return todo.completed;
        if (filter === "ACTIVE") return !todo.completed;
        return true;
    })

    const handleAddTodo = () => {
        if(todoText.trim()){
            dispatch({type: "ADD_TODO", payload: todoText})
            setTodoText("")
        }
    }

    return (
        <div>
            <h2>Todo List</h2>
            <input type="text" 
            value={todoText} 
            onChange={(e)=> setTodoText(e.target.value)} 
            placeholder="add todo" />
            <button onClick={handleAddTodo}>Add todo</button>
            <div>
                <button onClick={()=> dispatch({type: "SET_FILTER", payload:"ALL"})}>All</button>
                <button onClick={()=> dispatch({type: "SET_FILTER", payload:"ACTIVE"})}>active</button> 
                <button onClick={()=> dispatch({type: "SET_FILTER", payload:"COMPLETED"})}>Completed</button>

            </div>

            <ul>
                {
                    filteredTodos.map((todo)=> <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={()=> dispatch({type: "TOGGLE_TODO", payload: todo.id})}>
                        {todo.text}
                    </li>)
                }
            </ul>
            <p>Current Filter : {filter} </p>
        </div>
    )
}

export default TodoList;