import React, {useEffect, useState} from 'react'
import { getArticles } from '../../../../api/ArticleApi'
import classes from "./Articles.module.css"
import { Link } from "react-router-dom"
import ArticleBox from "../../ArticleBox"
import Pagination from "@material-ui/lab/Pagination";

export default () => {

    const [articles, setArticles] = useState([])
    let [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [articlesPerPage, setArticlesPerPage] = useState(6)

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

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)

    return (
        <div className={classes.container}>
            {
                currentArticles.map(article => (
                    <div className={classes.item}>
                        <Link to={`/articles/${article.id}`} className={classes.link}>
                            <ArticleBox title={article.title} />
                        </Link>
                    </div>
                ))
            }
        </div>

    )
}