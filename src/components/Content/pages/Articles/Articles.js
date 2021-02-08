import React, {useEffect, useState} from 'react'
import { getArticles1 } from '../../../../api/ArticleApi'
import ArticleListBox from "../../ArticleListBox";
import {useParams} from "react-router";
import Pagination from "@material-ui/lab/Pagination";
import classes from './Articles.module.css'
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
export default () => {

    const user = useSelector(state => state.user.userData)
    const { t } = useTranslation('home')
    const [articles, setArticles] = useState([])
    // let { page, size } = useParams();

    useEffect(() => {
        getArticles1(0, 6)
            .then(res => {
                setArticles(res.data.content)
                console.log('articles', res.data.content)
            })
    }, [])

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
