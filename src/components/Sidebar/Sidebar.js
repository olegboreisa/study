import React, {useEffect, useState} from 'react'
import classes from './Sidebar.module.css'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

const Sidebar = () => {

    const { t } = useTranslation("categories")
    const user = useSelector(state => state.user.userData)

    const categories = [
        {id: 1, name: `${t('biology')}`},
        {id: 2, name: `${t('chemistry')}`},
        {id: 3, name: `${t('art')}`},
        {id: 4, name: `${t('music')}`},
        {id: 5, name: `${t('mathematics')}`}
    ]

    return (
        user === null ?
            (
            <div className={classes.container}>
                <h5>{t('sign')}</h5>
            </div>
            )
            :
            (
                <div className={classes.container}>
                    <h3 style={{textDecoration: "underline"}}>{t('category')}</h3>
                    <div className={classes.cat}>
                        {
                            categories.map(cat => (
                                <div className={classes.wrapper} key={cat.id}>

                                    <Link to={`/articles/categories/${cat.id}`} className={classes.link}>{cat.name}</Link>

                                </div>
                            ))
                        }
                    </div>
                </div>
            )
    )
}

export default Sidebar;