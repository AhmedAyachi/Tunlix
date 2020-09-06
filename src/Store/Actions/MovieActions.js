import {apikey} from "estate";

export const setMovie=(key,value)=>{
    const data={};
    data[key]=value;
    return {
        type:"setMovie",
        data:data,
    }    
}

export const setMovies=(pagepair=1)=>({
    type:"setMovies",
    data:pagepair,
})

export const loadMovies=(pagepair=1)=>toreducer=>{
    const fetchs=[];
    for(let i=pagepair*2;i>pagepair-2;i--){
        fetchs.push(fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en&include_video=true&page=${i}`));
    }
    Promise.all(fetchs).
    then(responses=>responses.map(response=>response.json())).
    then(promises=>(async function(){
        const movies=[];
        for(let i=0;i<promises.length;i++){
            const data=await promises[i];
            movies.push(...data.results);
        }
        return movies;
    })()).
    then(data=>{toreducer({type:"setMovies",data})}).
    catch(error=>console.error(error));
};