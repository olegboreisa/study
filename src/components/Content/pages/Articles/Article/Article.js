import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import classes from './Article.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWrench, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {deleteArticle, getArticle} from "../../../../../api/ArticleApi";

export default () => {

    const [article, setArticle] = useState({})
    const { id } = useParams()
    console.log('ID', typeof id)

    useEffect(() => {
        getArticle(id)
                .then(response => {
                        setArticle(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
    }, [])

    const deleteArticleHandler = (id) => {
        deleteArticle(id)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
            <div className={classes.container}>
                <div>{article.id}</div>
                <div>{article.title}</div>
                <div>{article.text}</div>
                <div>{article.date}</div>

                <Link to={`/api/articles/update/${article.id}`}>
                    <FontAwesomeIcon icon={faWrench} size={"3x"}/>
                </Link>

                <FontAwesomeIcon icon={faTrash} size={"3x"}
                                 onClick={() => deleteArticleHandler(article.id)}/>

            </div>
    )



}





