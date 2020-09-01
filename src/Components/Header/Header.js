import React from "react";
import css from "./Header.module.css";
import {zoom0} from "assets";


export default function Header(){
    return (
        <div className={css.header}>
            <div className={css.row0}>
                <h1>Tunlix</h1>
                <div className={css.searcher}>
                    <input type="text"/>
                    <img alt="" src={zoom0}/>
                </div>
                <div className={css.contextmenubtn}>
                    
                </div>
            </div>
        </div>
    )
}