
const movieState={
    movies:[],
    searchedmovies:[],
}

export default function MovieReducer(state=movieState,action){
    switch(action.type){
        case "setMovie":
            return {...state,...action.data};
        case "setMovies":
            return {...state,movies:action.data,searchedmovies:action.data};
        default:
            return {...state};
    }
}