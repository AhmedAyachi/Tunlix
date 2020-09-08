import {useEffect} from "react";
import {setMovies} from "actions";


export function useMovies(collection,dispatch){
    useEffect(()=>{
        dispatch(setMovies(collection));
    },[]);
}