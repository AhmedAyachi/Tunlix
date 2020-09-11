import React,{createRef, useRef,useState} from "react";
import css from "./DetailsCard.module.css";
import Trailer from "./Trailer/Trailer";
import {playbtn} from "assets";
import {apikey} from "estate";
import {fadeIn} from "afile";


export default function DetailsCard(props){
    const [trailer,setTrailer]=useState(null);
    const {movie}=props;
    const refs={
        trailer:useRef(),
    }
    return (
        <div className={css.detailscard}>
            <img alt="" className={css.backdrop} src={movie.backdrop_path}/>
            {trailer&&
                <Trailer
                    style={styles.trailer}
                    reference={refs.trailer} 
                    trailer={trailer}
                />
            }
            <div className={css.col0}>
                <img className={css.poster} alt="" src={movie.poster_path}/>
            </div>
            <div className={css.col1}>
                <span className={css.title}>
                    {movie.title}
                    <span style={{whiteSpace:"nowrap"}}> ({movie.release_date})</span>
                </span>
                <img 
                    className={css.trailerplayer} 
                    alt="see Trailer" 
                    src={playbtn}
                    onClick={()=>{
                        if(trailer){
                            fadeIn(refs.trailer.current,"flex");
                        }
                        else{
                            loadTrailer(movie.id,setTrailer,refs);
                        }
                    }}
                />
                {details(movie).map(([detail,type],i)=>(
                    <span className={css[type]} key={`detail_${i}`}>{detail}</span>
                ))}
                <div className={css.overview}>{movie.overview}</div>
            </div>
        </div>
    )
}

const styles={
    trailer:{
        display:"none",
    },
}

const details=movie=>[
    [movie.genres.map(genre=>genre.name+" "),"genders"],
    [`${movie.title!==movie.original_title?`${movie.original_title} .`:""} ${getDuration(movie.runtime)}`,"duration"],
    ["Overview","overviewheader"],
]

const getDuration=runtime=>{
    const hours= Math.floor(runtime/60);
    const minutes=runtime%60;
    return (hours?hours+"h ":"")+(minutes?minutes+"min":"");
}

const loadTrailer=(id,setTrailer,refs)=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}&language=en-US`).
    then(response=>response.json()).
    then(data=>data.results).
    then(videos=>{
        const trailer=videos.find(video=>video.type==="Trailer");
        setTrailer(trailer);
        fadeIn(refs.trailer.current,"flex");
    })
}