import {  legacy_createStore , applyMiddleware , compose , combineReducers } from "redux";
import  thunk  from "redux-thunk";
import { signupReducer } from "./SignupRedux/reducer";
import { loginReducer } from "./LoginRedux/reducer";
export const rootReducer = combineReducers({
    sign:signupReducer,
    login : loginReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));