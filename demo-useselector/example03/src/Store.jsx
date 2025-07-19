import { configureStore } from "@reduxjs/toolkit";

const authReducer = (state = { user: null, isAuthenticated: false }, action) => {
   switch (action.type){
    case "LOGIN":
        return {
            ... state,
            user: action.payload,
            isAuthenticated: true,
        };
    case "LOGOUT":
        return {
            ...state,
            user: null,
            isAuthenticated:false,
        }
    default:
        return state
   }
}

export const store = configureStore({
    reducer:{
        auth: authReducer
    }
})