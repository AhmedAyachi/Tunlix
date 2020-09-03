import {useDispatch,useSelector} from "react-redux";
import {setMovie} from "actions";


export function useMoviesFilter(){
    const dispatch=useDispatch();
    const movies=useSelector(store=>store.movie.movies);
    return (searchValue="")=>{
        const filteredmovies=movies.filter(movie=>movie.title.toLowerCase().includes(searchValue));
        dispatch(setMovie("searchedmovies",filteredmovies));
    };

}