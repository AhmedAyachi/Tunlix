
const movieState={
    loaded:[],
    movies:[],
}

export default function MovieReducer(state=movieState,action){
    switch(action.type){
        case "setMovie":
            return {...state,...action.data};
        case "setMovies":
            return {...state,loaded:action.data,movies:action.data};
        default:
            return {...state};
    }
}