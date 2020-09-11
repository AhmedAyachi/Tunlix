import React from "react";
import css from "./Home.module.css";
import {Header,MovieList} from "components";


export default function Home(){
    return (
        <div className={css.home}>
            <Header/>
            <MovieList/>
        </div>
    )
}