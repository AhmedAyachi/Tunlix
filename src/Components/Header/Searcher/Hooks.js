import {useDispatch,useSelector} from "react-redux";
import {setMovie} from "actions";


export function useMoviesFilter(){
    const dispatch=useDispatch();
    const movies=useSelector(store=>store.movie.loaded);
    return (searchValue="")=>{
        const filteredmovies=movies.filter(movie=>movie.title.toLowerCase().includes(searchValue.toLowerCase()));
        dispatch(setMovie("movies",filteredmovies));
    };

}