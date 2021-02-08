import React, {useEffect, useState} from 'react'
import { getArticles } from '../../../../api/ArticleApi'
import ArticleListBox from "../../ArticleListBox";
import {useParams} from "react-router";

export default () => {

    const [articles, setArticles] = useState([])
    const [totalArticles, setTotalArticles] = useState()
    const { page, size } = useParams();

    useEffect(() => {
        getArticles(0, 6)
            .then(res => {
                console.log('res', res.data.content)
                setArticles(res.data.content)
                setTotalArticles(res.data)
            })
    }, [])

    return (
        <ArticleListBox data={articles} />
    )
}






// const [currentPage, setCurrentPage] = useState(1)
// const [articlesPerPage, setArticlesPerPage] = useState (6)
// const [totalArticles, setTotalArticles]= useState()
// const [itemsCountPerPage, setItemCountPerPage]= useState()
// const [totalItemsCount, setTotalItemsCount]= useState()
// const indexOfLastArticle = currentPage * articlesPerPage;
// const indexOfFirstArticle = indexOfLastArticle - articles;
// const currentArticle = articles.slice(indexOfFirstArticle, indexOfLastArticle);