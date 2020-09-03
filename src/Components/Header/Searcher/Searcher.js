import React,{useRef} from "react";
import css from "./Searcher.module.css";
import FilterMenu from "./FilterMenu/FilterMenu";
import {filtericon} from "assets";
import * as H from "./Hooks";
import {toggle} from "afile";


export default function Searcher(){
    const filterMovies=H.useMoviesFilter();
    const refs={
        filtermenu:useRef(),
    }
    return (
        <div className={css.searcher}>
            <input 
                placeholder="Search for a movie" 
                type="text"
                onChange={event=>{filterMovies(event.target.value)}}
            />
            <img 
                alt="" 
                src={filtericon}
                onClick={()=>{toggle(refs.filtermenu.current,"flex")}}
            />
            <FilterMenu reference={refs.filtermenu}/>
        </div>
    )
}