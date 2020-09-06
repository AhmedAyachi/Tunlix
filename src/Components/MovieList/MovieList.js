import React from "react";
import css from "./MovieList.module.css";
import MovieCard from "./MovieCard/MovieCard";
import {useSelector,useDispatch} from "react-redux";
import {setMovies} from "actions";
import {arrow} from "assets";
import * as H from "./Hooks";


let pagepair=1;
export default function MovieList(){
    const dispatch=useDispatch();
    H.useMovies(dispatch);
    const movies=useSelector(store=>store.movie.movies);
    return (
        <div className={css.movielist}>
            <div className={css.row0}>
                {arrowsprops.map(props=>(
                    <img 
                        alt=""
                        src={arrow}
                        style={props.style}
                        title={`${props.title} movies collection`}
                        onClick={()=>{props.setPagepair(dispatch)}}
                    />
                ))}
            </div>
            <div className={css.row1}>
                {movies.map((movie,index)=><MovieCard key={`${movie.title}_${index}`} movie={movie}/>)}
            </div>
            {movies.length===0&&<h1 className={css.nomoviemsg}>Can't find movie</h1>}
        </div>
    )
}

const arrowsprops=[
    {title:"Previous",setPagepair:(dispatch)=>{Pagepair.previous(dispatch)},style:{transform:"scaleX(-1)"}},
    {title:"Next",setPagepair:(dispatch)=>{Pagepair.next(dispatch)},style:{}},
];

const Pagepair=new (function(){
    this.previous=(dispatch)=>{
        if(pagepair>1){
            pagepair--;
            dispatch(setMovies(pagepair));
        }
    }
    this.next=(dispatch)=>{
        if(pagepair<250){
            pagepair++;
            dispatch(setMovies(pagepair));
        }
    }
})();