import "./src/index.css";
import React from "react";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import Reducer,{Middleware} from "./src/Store";


const store=createStore(Reducer,composeWithDevTools(applyMiddleware(Middleware)));
export const wrapRootElement=({element})=>{
    return (
        <Provider store={store}>
            {element}
        </Provider>
    )
}