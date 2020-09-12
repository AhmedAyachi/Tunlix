import {Movie} from "estate";
import {apikey} from "lock";

export const setMovie=(key,value)=>{
    const data={};
    data[key]=value;
    return {
        type:"setMovie",
        data:data,
    }    
}

export const setMovies=(collection=1)=>({
    type:"setMovies",
    data:collection,
})

export const setLoading=(value)=>({
    type:"setLoading",
    data:value,
})

export const loadMovies=(collection=1)=>toreducer=>{
    toreducer(setLoading(true));
    const fetchs=[];
    const start=collection*2;
    const end=start-2;
    for(let i=start;i>end;i--){
        fetchs.push(fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en&page=${i}`));
    }
    Promise.all(fetchs).
    then(responses=>responses.map(response=>response.json())).
    then(async function(promises){
        const movies=[];
        for(let i=0;i<2;i++){
            const data=await promises[i];
            movies.push(...data.results);
        }
        return movies.map(movie=>new Movie(movie));
    }).
    then(data=>{
        toreducer({type:"setMovies",data});
        toreducer(setLoading(false));
    }).
    catch(error=>console.error(error));
};