import React,{useRef} from "react";
import css from "./MovieDetails.module.css";
import {Movie} from "estate";
import {loadinganim} from "assets";
import DetailsCard from "./DetailsCard/DetailsCard";
import CreditsCard from "./CreditsCard/CreditsCard";
import * as H from "./Hooks";


export default function MovieDetails(props){
    const {id=0}=props;
    const details=H.useMovieDetails(id);
    const credits=H.useMovieCredits(id);
    return (
        <div className={css.moviedetails}>
            <div className={css.row0}>
                {details?
                    <DetailsCard movie={new Movie(details)}/>:
                    <img className={css.loadinganim} alt="" src={loadinganim}/>
                }
            </div>
            <div className={css.row1}>
                {credits?
                    <>
                        <p className={css.casttext}>Cast</p>
                        <CreditsCard credits={credits}/>
                    </>:
                    <img className={css.loadinganim} alt="" src={loadinganim}/>
                }
            </div>
        </div>
    )
}