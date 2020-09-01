import React from "react";
import css from "./404.module.css";


export default function NotFoundPage(){
    return (
        <div className={css.notfound}>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that does not exist... the sadness.</p>
        </div>
    )
}