import React, {useEffect, useState} from 'react'
import { getArticles } from '../../../../api/ArticleApi'
import ArticleListBox from "../../ArticleListBox";

export default () => {

    const [articles, setArticles] = useState([])
    const [totalPages, setTotalPages]= useState()
    const [itemsCountPerPage, setItemCountPerPage]= useState()
    const [totalItemsCount, setTotalItemsCount]= useState()

    useEffect(() => {
        getArticles()
            .then(res => {
                // console.log(res)
                // console.log('data',res.data.totalPages)
                // console.log('size', res.data.size)
                // console.log('elements', res.data.totalElements)
                setArticles(res.data.content)
                setTotalPages(res.data.totalPages)
                setItemCountPerPage(res.data.size)
                setTotalItemsCount(res.data.totalElements)
            })
    }, [])


    return (
        <ArticleListBox dataFromParentToChild={articles} />
    )
}