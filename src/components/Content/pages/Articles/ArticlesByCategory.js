import React, {useEffect, useState} from 'react'
import {getArticles, getArticlesByCategory} from "../../../../api/ArticleApi";
import {useParams} from "react-router";
import ArticleListBox from "../../ArticleListBox";

export default () => {

    const [articles, setArticles] = useState([])

    const { id } = useParams()

    useEffect(() => {
        getArticlesByCategory(id)
            .then(res => {
                setArticles(res.data)
            })
    }, [id])


    return (
        <ArticleListBox dataFromParentToChild={articles} />
    )
}
