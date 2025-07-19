import { configureStore } from "@reduxjs/toolkit";

const todoReducer = (state = { todos: [], filter: 'ALL' }, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
            };
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map((mytodo) => mytodo.id === action.payload ? { ...mytodo, completed: !mytodo.completed } : mytodo)
            };
        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;

    }
}

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})