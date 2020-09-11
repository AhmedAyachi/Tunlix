import React from "react";
import css from "./MovieDetails.module.css";
import DetailsCard from "./DetailsCard/DetailsCard";


export default function MovieDetails(props){
    const {id=0,location}=props;
    const {movie}=location.state;
    return (
        <div className={css.moviedetails}>
            <div className={css.row0}>
                <DetailsCard movie={movie}/>
            </div>
        </div>
    )
}