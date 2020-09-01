import React from "react";
import css from "./App.module.css";
import Home from "./Pages/Home/Home";


export default function App(){
    return (
        <div className={css.app}>
            <Home/>
        </div>
    )
}