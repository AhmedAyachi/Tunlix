import React from "react";
import css from "./DetailsCard.module.css";


export default function DetailsCard(props){
    const {movie}=props;
    console.log(movie);
    return (
        <div className={css.detailscard}>
            <img alt="" className={css.backdrop} src={movie.backdrop_path}/>
            <div className={css.col0}>
                <img className={css.poster} alt="" src={movie.poster_path}/>
            </div>
            <div className={css.col1}>
                {details(movie).map(([detail,type],i)=>(
                    <p className={css[type]} key={`detail_${i}`}>{detail}</p>
                ))}
                <div className={css.overview}>{movie.overview}</div>
            </div>
        </div>
    )
}
const details=movie=>[
    [<span>{movie.title}<span style={{whiteSpace:"nowrap"}}> ({movie.release_date})</span></span>,"title"],
    [movie.genres.map(genre=>genre.name+" "),"genders"],
    [`${movie.title!==movie.original_title?`${movie.original_title} .`:""} ${getDuration(movie.runtime)}`,"duration"],
    ["Overview","overviewheader"],
]

const getDuration=runtime=>Math.floor(runtime/60)+"h "+runtime%60+"min";