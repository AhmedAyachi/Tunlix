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
        new Movie("Black Mirror",blackmirrorcover),new Movie("Money Hiest",moneyhiestcover),new Movie("Mr Robot",mrrobotcover),
        new Movie("Jhon Wick 1",wickcover1),new Movie("Jhon Wick 2",wickcover2),new Movie("Jhon Wick 3",wickcover3),
        new Movie("Spider Man Home Coming",spidercover),new Movie("Death Note",deathnotecover),new Movie("Teen Wolf",teenwolfcover),
        new Movie("Pirate Of The Caribbean",piratescover),
    ];
}