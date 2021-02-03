import React, {useEffect, useState} from 'react'
import { getArticles } from '../../../../api/ArticleApi'
import classes from "./Articles.module.css"
import { Link } from "react-router-dom"
import ArticleBox from "../../ArticleBox"
import one from "../../assets/pics/one.jpg"
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { CircularProgress } from '@material-ui/core';

export default () => {

    const [articles, setArticles] = useState([])
    let [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getArticles()
            .then(res => {
                setArticles(res.data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className={classes.container}>

                {
                    loading
                        ?   <CircularProgress />

                        :   <div className={classes.articles}>
                            {
                                articles.map(article => (
                                    <div className={classes.column}>
                                        <Link to={'api/articles/' + article.id} className={classes.link}>
                                            <ArticleBox picture={one} title={article.title} />
                                        </Link>
                                    </div>
                                ))
                            }
                                <div className={classes.addButton}>
                                    <Link to={"/articles/add"} className={classes.addArticle}>
                                        <FontAwesomeIcon icon={faPlusCircle} size={"3x"}/>
                                    </Link>
                                </div>
                            </div>
                }
        </div>
    )
}