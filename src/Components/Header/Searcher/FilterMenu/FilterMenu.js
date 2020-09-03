import React,{useRef} from "react";
import css from "./FilterMenu.module.css";
import {emptystar,fullstar,halfstar,quarterstar,quarterhalfstar} from "assets";


export default function FilterMenu({reference}){
    const refs={
        starts:[useRef(),useRef(),useRef(),useRef(),useRef()],
    }
    return (
        <div className={css.filtermenu} style={styles.filtermenu} ref={reference}>
            <div className={css.ratingsection}>
                <p>Rating:</p>
                <div className={css.ratingstars}>{starsprops.map((props,index)=>{
                    props.ref=refs.starts[index];
                    return (
                        <img alt="" {...props}
                        onMouseEnter={()=>{handleMouseEnter(index)}}
                        onClick={()=>{handleClick(index)}}
                        onMouseLeave={()=>{handleMouseLeave(index)}}
                    />
                    )
                })}</div>
            </div>  
        </div> 
    )
}

const styles={
    filtermenu:{
        display:"none",
    }
}

const starsprops=(function(){
    const stars=[];
    for(let i=0;i<5;i++){
        stars.push({key:`EmptyStar_${i}`,alt:"",src:emptystar})
    }
    return stars;
})();

const handleMouseEnter=(index=0)=>{
    for(let i=0;i<=index;i++){
        starsprops[i].src=emptystar;
        starsprops[i].ref.current.src=fullstar;
    }
    const laststar=starsprops.length-1;
    for(let i=laststar;i>index;i--){
        starsprops[i].src=emptystar;
        starsprops[i].ref.current.src=emptystar;
    }
}
const handleClick=(index=0)=>{
    for(let i=0;i<=index;i++){
        starsprops[i].src=fullstar;
    }
}
const handleMouseLeave=(index=0)=>{
    for(let i=0;i<=index;i++){
        starsprops[i].ref.current.src=starsprops[i].src;
    }
}