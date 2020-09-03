import React from "react";
import css from "./Header.module.css";
import Searcher from "./Searcher/Searcher";


export default function Header(){
    return (
        <div className={css.header}>
            <div className={css.row0}>
                <h1>Tunlix</h1>
                <Searcher/>
                <div className={css.usericon}></div>
            </div>
        </div>
    )
}