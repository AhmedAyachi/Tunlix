import React from "react";
import css from "./MovieCard.module.css";


export default function MovieCard({movie}){
    return (
        <div className={css.moviecard}>
            <div className={css.title}>{movie.title}</div>
            <img alt="" src={movie.image}/>
        </div>
    )
}