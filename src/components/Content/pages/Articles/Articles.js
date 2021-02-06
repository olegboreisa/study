import React, {useEffect, useState} from 'react'
import { getArticles } from '../../../../api/ArticleApi'
import classes from "./Articles.module.css"
import { Link } from "react-router-dom"
import ArticleBox from "../../ArticleBox"
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { CircularProgress } from '@material-ui/core';
import Sidebar from "../../../Sidebar/Sidebar";

export default () => {

    const [articles, setArticles] = useState([])
    let [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getArticles()
            .then(res => {
                setArticles(res.data)
                console.log(res)

            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className={classes.container}>
            {
                articles.map(article => (
                    <div className={classes.item}>
                        <Link to={`/articles/${article.id}`}>
                            <ArticleBox title={article.title} />
                        </Link>
                    </div>
                ))
            }
        </div>

    )
}