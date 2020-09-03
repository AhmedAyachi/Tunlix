import {useDispatch,useSelector} from "react-redux";
import {setMovie} from "actions";


export function useMoviesRateFilter(){
    const dispatch=useDispatch();
    const movies=useSelector(store=>store.movie.movies);
    return (searchValue=0)=>{
        const filteredmovies=movies.filter(movie=>Math.round(movie.rate)>=searchValue);
        dispatch(setMovie("searchedmovies",filteredmovies));
    };

}