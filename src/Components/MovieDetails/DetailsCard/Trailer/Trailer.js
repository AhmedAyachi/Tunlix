import React from "react";
import css from "./Trailer.module.css";
import {closer} from "assets";
import {fadeOut} from "afile";


export default function Trailer(props){
    const {trailer,reference,style}=props;
    return (
        <div ref={reference} className={css.trailer} style={style}>
            <img 
                alt="X" 
                src={closer}
                onClick={()=>{
                    fadeOut(reference.current);
                }}
            />
            <iframe src={`https://www.youtube.com/embed/${trailer.key}`}></iframe>
        </div>
    )
}