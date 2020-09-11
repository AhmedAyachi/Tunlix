import React from "react";
import css from "./CastCard.module.css";


export default function CastCard({cast}){
    const {name,character,profile_path}=cast;
    return (
        <div className={css.castcard}>
            <img alt="" className={css.photo} src={`https://image.tmdb.org/t/p/w138_and_h175_face/${profile_path}`}/>
            <p className={css.name}>{name}</p>
            <p className={css.character} title={character}>{character||<br/>}</p>
        </div>
    )
}