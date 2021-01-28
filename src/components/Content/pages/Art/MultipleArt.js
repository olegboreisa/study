import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from "./MultipleArt.module.css";
import Window from "../../Window";
import one from "../../assets/pics/one.jpg";


export default ({ articles }) => {

    return (
        <div className={classes.container}>
            {
                articles.map(article => (
                    <NavLink to={'/art/' + article.id} className={classes.link}>
                        <div className={classes.column}>
                            <Window picture={one} title={article.title} />
                        </div>
                    </NavLink>
                ))
            }
        </div>
    )
}

