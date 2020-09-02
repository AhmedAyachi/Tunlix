import React from "react";
import css from "./MovieCard.module.css";
import {fullstar} from "assets";


export default function MovieCard({movie}){
    return (
        <div className={css.moviecard}>
            <div className={css.details}>
                <p>{movie.title}</p>
                <div className={css.rating}>{getRateStars(movie.rate)}</div>
            </div>
            <img alt="" src={movie.image}/>
        </div>
    )
}

const getRateStars=(rate=2)=>{
    const rating=[];
    const length=Math.round(rate);
    for(let i=0;i<length;i++){
        rating.push(<img alt="" src={fullstar}/>);
    }
    return rating;
}