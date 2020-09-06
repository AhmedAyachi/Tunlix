import React from "react";
import css from "./MovieCard.module.css";
import {fullstar,playbtn1} from "assets";


export default function MovieCard({movie}){
    const {title,poster_path,vote_average}=movie;
    return (
        <div className={css.moviecard}>
            <div className={css.details}>
                <div className={css.title}>{title}</div>
                <div className={css.rating}>{getRateStars(vote_average/2)}</div>
                <img alt="" src={playbtn1}/>
            </div>
            <img alt="" src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
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