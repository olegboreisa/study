import React, {useEffect, useState} from 'react'
import {useParams} from "react-router";
import classes from './SingleArtById.module.css'
import axios from 'axios'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWrench, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default () => {

    const [article, setArticle] = useState({})
    let { id } = useParams()

    useEffect(() => {
        loadArticle()
    }, [])

    const loadArticle = () => {
            axios.get(`/api/articles/${id}`)
                .then(response => {
                        setArticle(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
    }

    const deleteArticleHandler = (id) => {
        axios.delete(`/api/articles/delete/${id}`)
            .then(() => loadArticle)
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

                <Link to={`/articles/update/${id}`}>
                    <FontAwesomeIcon icon={faWrench} size={"3x"}/>
                </Link>


                <FontAwesomeIcon icon={faTrash} size={"3x"}
                                 onClick={() => deleteArticleHandler(article.id)}/>

            </div>
    )



}





