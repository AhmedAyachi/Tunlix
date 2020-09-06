import "./src/index.css";
import React from "react";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import Reducer,{Middleware} from "./src/Store";


const store=createStore(Reducer,composeWithDevTools(applyMiddleware(Middleware)));
function StoreProvider({element}){
    return (
        <Provider store={store}>
            {element}
        </Provider>
    )
}


export const wrapRootElement=StoreProvider;