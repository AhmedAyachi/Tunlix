import {useEffect} from "react";
import {useDispatch} from "react-redux";


export function useMovies(){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch({type:"setMovies",data:2});
    },[]);
}