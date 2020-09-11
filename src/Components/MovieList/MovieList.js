import React from "react";
import css from "./MovieList.module.css";
import MovieCard from "./MovieCard/MovieCard";
import {useDispatch,connect as Connect} from "react-redux";
import {setMovies} from "actions";
import {arrow,loadinganim} from "assets";


let collection=1;
function MovieList(props){
    const dispatch=useDispatch();
    const {movies,loading}=props;
    return (
        <div className={css.movielist}>
            <div className={css.row0}>
                {arrowskeys.map((keys,i)=>(
                    <img 
                        alt=""
                        key={`${keys.title}btn_${i}`}
                        className={css.arrows}
                        src={arrow}
                        style={keys.style}
                        title={`${keys.title} movies collection`}
                        onClick={()=>{keys.setCollection(dispatch)}}
                    />
                ))}
                {loading&&<img className={css.loader} alt="" src={loadinganim}/>}
            </div>
            <div className={css.row1}>
                {movies.map((movie,index)=><MovieCard key={`${movie.title}_${index}`} movie={movie}/>)}
            </div>
            {!loading&&movies.length===0&&<h1 className={css.nomoviemsg}>Can't find movie</h1>}
        </div>
    )
}

const getStore=store=>({
    movies:store.movie.movies,
    loading:store.movie.loading,
})

export default Connect(getStore)(MovieList);
const arrowskeys=[
    {title:"Previous",setCollection:(dispatch)=>{Collection.previous(dispatch)},style:{transform:"scaleX(-1)"}},
    {title:"Next",setCollection:(dispatch)=>{Collection.next(dispatch)},style:{}},
];

const Collection=new (function(){
    this.previous=(dispatch)=>{
        if(collection>1){
            collection--;
            dispatch(setMovies(collection));
        }
    }
    this.next=(dispatch)=>{
        if(collection<250){
            collection++;
            dispatch(setMovies(collection));
        }
    }
})();