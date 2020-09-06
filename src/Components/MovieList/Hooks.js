import {useEffect} from "react";
import {setMovies} from "actions";


export function useMovies(dispatch){
    useEffect(()=>{
        dispatch(setMovies(1));
    },[]);
}