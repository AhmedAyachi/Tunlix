import React,{useEffect} from "react";
import css from "./index.module.css";
import {setMovies} from "actions";
import {useDispatch} from "react-redux";
import {Router} from "@reach/router";
import {MovieDetails} from "components";
import {Home} from "../Routes";


export default function Index(){
    const dispatch=useDispatch();
    H.useMovies(dispatch);
    return (
        <div className={css.index}>
            <Router basepath="/">
                <Home path="/"/>
                <MovieDetails path="/:id"/>
            </Router>
        </div>
    )
}

const H=new (function(){
    this.useMovies=function useMovies(dispatch){
        useEffect(()=>{
            dispatch(setMovies(1));
        },[]);
    }
    return this;
})();