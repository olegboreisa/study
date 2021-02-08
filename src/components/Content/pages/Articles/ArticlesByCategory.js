import React, {useEffect, useState} from 'react'
import {getArticlesByCategory} from "../../../../api/ArticleApi";
import {useParams} from "react-router";
import ArticleListBox from "../../ArticleListBox";
import classes from "./Articles.module.css";
import Pagination from "@material-ui/lab/Pagination";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

export default () => {

    const user = useSelector(state => state.user.userData)
    const { t } = useTranslation('home')
    const [articles, setArticles] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getArticlesByCategory(id)
            .then(res => {
                setArticles(res.data)
            })
    }, [id])


    return (
        <div className={classes.container}>
            <ArticleListBox data={articles} />
            {
                user === null ?
                    (
                        <p className={classes.text}>{t('signIn')}</p>
                    )
                    :
                    (
                        <Pagination count={3}/>
                    )
            }

        </div>
    )
}
