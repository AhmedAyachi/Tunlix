import {useEffect,useState} from "react";
import {apikey} from "lock";


export const useMovieDetails=(id)=>{
    const [details,setDetails]=useState(null);
    useEffect(()=>{(
        async function(){
            const response=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`);
            const data=await response.json();
            setDetails(data);
        })();
    },[]);
    return details;
}

export const useMovieCredits=id=>{
    const [credits,setCredits]=useState(null);
    useEffect(()=>{(
        async function(){
            const response=await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`);
            const data=await response.json();
            setCredits(data);
        })();
    },[]);
    return credits;
}