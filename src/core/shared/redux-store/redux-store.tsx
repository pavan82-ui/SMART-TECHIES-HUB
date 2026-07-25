
import { applyMiddleware, createStore } from "redux";
import loggerMiddleware from "../redux-middleware/redux-middleware";
//create reducer function
//reducer take 2 parms. state, action
//state -> storage
//action -> event from the component to update state and get data
//action is an object - what action what data
const initialState = { userData: null, tasksData: null };
const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        case "user":
            return { ...state, userData: action.data };
        case "tasks":
            return { ...state, tasksData: action.data };
        case "txtdata":
            return { ...state, txtdata:action.data}
        default:
            return state;
    }
}
//create store
const store = createStore(reducer, applyMiddleware(loggerMiddleware));
export default store