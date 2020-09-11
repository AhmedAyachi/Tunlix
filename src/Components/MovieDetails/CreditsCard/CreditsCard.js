import React from "react";
import css from "./CreditsCard.module.css";
import CastCard from "./CastCard/CastCard";


export default function CreditsCard({credits}){
    const casts=credits.cast;
    const crews=credits.crew;
    return (
        <div className={css.creditscard}>
            {casts.filter(cast=>cast.profile_path).map((cast,i)=>(
                <CastCard key={`${cast.name}_${i}`} cast={cast}/>
            ))}
        </div>
    )
}