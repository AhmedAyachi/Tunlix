import React from "react";
import css from "./MovieCard.module.css";
import {fullstar,playbtn0,playbtn1} from "assets";


export default function MovieCard({movie}){
    return (
        <div className={css.moviecard}>
            <div className={css.details}>
                <p>{movie.title}</p>
                <div className={css.rating}>{getRateStars(movie.rate)}</div>
                <img alt="" src={playbtn1}/>
            </div>
            <img alt="" src={movie.image}/>
        </div>
    )
}

const getRateStars=(rate=2)=>{
    const rating=[];
    const length=Math.round(rate);
    for(let i=0;i<length;i++){
        rating.push(<img key={`ratingstar_${i}`} alt="" src={fullstar}/>);
    }
    return rating;
}