import React, {useEffect, useState} from 'react'
import {getArticles, getArticlesByCategory} from "../../../../api/ArticleApi";
import {useParams} from "react-router";
import classes from "./Articles.module.css";
import {Link} from "react-router-dom";
import ArticleBox from "../../ArticleBox";

export default () => {

    const [articles, setArticles] = useState([])

    const { id } = useParams()

    useEffect(() => {
        getArticlesByCategory(id)
            .then(res => {
                setArticles(res.data)
            })
    }, [articles])


    return (
        <div className={classes.container}>
            {
                articles.map(article => (
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
