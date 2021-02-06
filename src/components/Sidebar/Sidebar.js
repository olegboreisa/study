import React, {useEffect, useState} from 'react'
import classes from './Sidebar.module.css'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

const Sidebar = () => {

    const { t } = useTranslation("categories")
    const user = useSelector(state => state.user.userData)

    const categories = [
        {id: 1, path: '/articles/biology', name: `${t('biology')}`},
        {id: 2, path: '/articles/chemistry', name: `${t('chemistry')}`},
        {id: 3, path: '/articles/art', name: `${t('art')}`},
        {id: 4, path: '/articles/music', name: `${t('music')}`},
        {id: 5, path: '/articles/mathematics', name: `${t('mathematics')}`}
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

                                    <Link to={cat.path} className={classes.link}>{cat.name}</Link>

                                </div>
                            ))
                        }
                    </div>
                </div>
            )
    )
}

export default Sidebar;