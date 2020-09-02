import {combineReducers} from "redux";
import {MovieReducer} from "./Reducers";


const Reducer=combineReducers({
    movie:MovieReducer, 
});
export default Reducer;