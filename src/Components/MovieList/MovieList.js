import React from "react";
import css from "./MovieList.module.css";
import MovieCard from "./MovieCard/MovieCard";
import {useSelector} from "react-redux";
import * as H from "./Hooks";


export default function MovieList(){
    H.useMovies();
    const movies=useSelector(store=>store.movie.searchedmovies);
    return (
        <div className={css.movielist}>
            <div className={css.row0}>

            </div>
            <div className={css.row1}>
                {movies.map((movie,index)=><MovieCard key={`${movie.title}_${index}`} movie={movie}/>)}
            </div>
            {movies.length===0&&<h1 className={css.nomoviemsg}>Can't find movie</h1>}
        </div>
    )
}