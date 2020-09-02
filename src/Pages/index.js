import React from "react";
import css from "./index.module.css";
import {Header,MovieList} from "../Components";

export default function Index(){
    return (
        <div className={css.index}>
            <Header/>
            <MovieList/>
        </div>
    )
}