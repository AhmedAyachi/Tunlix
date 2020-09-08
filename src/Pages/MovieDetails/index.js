import React from "react";
import css from "./MovieDetails.module.css";


export default function MovieDetails(props){
    const {navigate,location}=props;
    const {movie={title:"title"}}=location.state;
    console.log(props);
    return (
        <div className={css.moviedetails}>
            <p onClick={()=>{navigate(`/movies/${movie.title}`)}}>{movie.title}</p>
        </div>
    )
}