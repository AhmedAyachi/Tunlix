import React from "react";
import css from "./App.module.css";
import Home from "./Home";


export default function App(){
    return (
        <div className={css.app}>
            <Home/>
        </div>
    )
}