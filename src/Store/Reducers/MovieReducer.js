import {Movie} from "estate";
import {blackmirrorcover,moneyhiestcover,mrrobotcover,wickcover1,wickcover2,wickcover3,spidercover,deathnotecover,piratescover,teenwolfcover} from "assets";


const movieState={
    movies:[...getMovies()],
    searchedmovies:[...getMovies()],
}


export default function MovieReducer(state=movieState,action){
    switch(action.type){
        case "setMovie":
            return {...state,...action.data};
        default:
            return {...state};
    }
}




function getMovies(){
    return [
        new Movie("Black Mirror",blackmirrorcover,3),
        new Movie("Money Hiest",moneyhiestcover,3.25),
        new Movie("Mr Robot",mrrobotcover,4.5),
        new Movie("Jhon Wick 1",wickcover1,4),
        new Movie("Jhon Wick 2",wickcover2,3.5),
        new Movie("Jhon Wick 3",wickcover3,3),
        new Movie("Spider Man Home Coming",spidercover,3.5),
        new Movie("Death Note",deathnotecover,4),
        new Movie("Teen Wolf",teenwolfcover,3.5),
        new Movie("Pirate Of The Caribbean",piratescover,4.5),
    ];
}