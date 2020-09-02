import React from "react";
import css from "./Header.module.css";
import {zoom0} from "assets";
import * as H from "./Hooks";


export default function Header(){
    const filterMovies=H.useMoviesFilter();
    return (
        <div className={css.header}>
            <div className={css.row0}>
                <h1>Tunlix</h1>
                <div className={css.searcher}>
                    <input 
                        placeholder="Search for a movie" 
                        type="text"
                        onChange={event=>{filterMovies(event.target.value)}}
                    />
                    <img alt="" src={zoom0}/>
                </div>
                <div className={css.contextmenubtn}>
                    
                </div>
            </div>
        </div>
    )
}