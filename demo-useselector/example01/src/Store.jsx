import { configureStore } from "@reduxjs/toolkit";

const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        default:
            return state;
    }
}

export const Store = configureStore({
    reducer: {
        numberCounter: counterReducer
    }
});