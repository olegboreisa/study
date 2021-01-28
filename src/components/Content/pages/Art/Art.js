import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import classes from "./Art.module.css";
import Window from "../../Window";
import one from "../../assets/pics/one.jpg";


export default () => {

    const [articles, setArticles] = useState ([])
    const url = '/art'

    useEffect( () => {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setArticles(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className={classes.container}>
            {
                articles.map(article => (
                    <NavLink to={'/art/' + article.id} className={classes.link}>
                        <div className={classes.column}>
                            <Window picture={one} title={article.title}/>
                        </div>
                    </NavLink>
                ))
            }
        </div>
    )
}

