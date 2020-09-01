import React from "react";
import css from "./Home.module.css";
import * as H from "./Hooks";


export default function Home(){
    const data=H.useData();
    return (
        <div className={css.home}>
            <h1>Home Page {data.site.siteMetadata.title}</h1>
        </div>
    )
}