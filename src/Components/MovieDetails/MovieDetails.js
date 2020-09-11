import React from "react";
import css from "./MovieDetails.module.css";
import {Movie} from "estate";
import DetailsCard from "./DetailsCard/DetailsCard";
import * as H from "./Hooks";


export default function MovieDetails(props){
    const {id=0,location}=props;
    const {movie}=location.state;
    const details=H.useMovieDetails(id);
    const credits=H.useMovieCredits(id);
    return (
        <div className={css.moviedetails}>
            <div className={css.row0}>
                {details&&<DetailsCard movie={new Movie(details)}/>}
            </div>
            <div className={css.row1}>
                {credits&&
                    <p style={{color:"white"}}>Credits</p>
                }
            </div>
        </div>
    )
}