import React from "react";
import css from "./MovieList.module.css";
import MovieCard from "./MovieCard/MovieCard";


export default function MovieList({movies}){
    return (
        <div className={css.movielist}>
            {movies.map(movie=>(
                <MovieCard movie={movie}/>
            ))}
        </div>
    )
}