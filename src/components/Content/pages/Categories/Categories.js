import React, {useEffect, useState} from 'react'
import axios from 'axios';
import classes from "../Categories/Categories.module.css";
import {NavLink} from "react-router-dom";
import Window from "../../Window";
import one from "../../assets/pics/one.jpg";
import Pagination from '@material-ui/lab/Pagination';


export default () => {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const count = 3;

    useEffect(() => {
        axios.get(`api/articles/${page}/${count}`)
            .then(response => {
                setArticles(response.data)

            })
            .catch(error => {
                console.log(error)
            })
    }, [page])

    const handleChange = (event, value) => {
        setPage(value)
    }

    return (
        <div className={classes.container}>
            <div className={classes.articles}>
                {
                    articles.map(article => (
                        <NavLink to={'/categories' + article.id} className={classes.link}>
                            <div className={classes.column}>
                                <Window picture={one} title={article.title} />
                            </div>
                        </NavLink>
                    ))
                }
            </div>

            <div>
                <Pagination count={count} showFirstButton showLastButton siblingCount={0} onChange={handleChange}/>
            </div>
        </div>
    )
}