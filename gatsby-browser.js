import "./src/index.css";
import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import Reducer from "./src/Store";


function StoreProvider({element}){
    const store=createStore(Reducer,composeWithDevTools());
    return (
        <Provider store={store}>
            {element}
        </Provider>
    )
}


export const wrapRootElement=StoreProvider;