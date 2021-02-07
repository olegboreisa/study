import React, {useEffect, useState} from 'react'
import { getArticles } from '../../../../api/ArticleApi'
import ArticleListBox from "../../ArticleListBox";

export default () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
            .then(res => {
                setArticles(res.data)
            })
    }, [])

    return (
        <ArticleListBox dataFromParentToChild={articles} />
    )
}