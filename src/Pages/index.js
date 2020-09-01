import React from "react";
import css from "./index.module.css";
import {Header,MovieList} from "../Components";
import {Movie} from "estate";
import {blackmirrorcover,moneyhiestcover,mrrobotcover,wickcover1,wickcover2,wickcover3,spidercover,deathnotecover,piratescover,teenwolfcover} from "assets";


export default function Index(){
    return (
        <div className={css.index}>
            <Header/>
            <MovieList movies={movies}/>
        </div>
    )
}

const movies=[
    new Movie("Black Mirror",blackmirrorcover),
    new Movie("Money Hiest",moneyhiestcover),
    new Movie("Mr Robot",mrrobotcover),
    new Movie("Jhon Wick 1",wickcover1),
    new Movie("Jhon Wick 2",wickcover2),
    new Movie("Jhon Wick 3",wickcover3),
    new Movie("Spider Man Home Coming",spidercover),
    new Movie("Death Note",deathnotecover),
    new Movie("Pirate Of The Caribbean",piratescover),
    new Movie("Teen Wolf",teenwolfcover),
]