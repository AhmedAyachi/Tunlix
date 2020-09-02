import React from "react";
import css from "./MovieList.module.css";
import MovieCard from "./MovieCard/MovieCard";
import {useSelector} from "react-redux";


export default function MovieList(){
    const movies=useSelector(store=>store.movie.searchedmovies);
    return (
        <div className={css.movielist}>
            {movies.map((movie,index)=><MovieCard key={`${movie.name}_${index}`} movie={movie}/>)}
        </div>
    )
}