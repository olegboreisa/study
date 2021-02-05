import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css'
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useTranslation} from "react-i18next";

const Navbar = () => {

    const { t } = useTranslation('navbar')

    return (
        <div className={classes.container}>

            <FontAwesomeIcon icon={faUserGraduate} size={"4x"}/>

            <div className={classes.item2}>
                <NavLink to={"/home"} className={classes.link}>{t('home')}</NavLink>
                <NavLink to={"/articles"} className={classes.link}>{t('articles')}</NavLink>
                <NavLink to={"/login"} className={classes.link}>{t('login')}</NavLink>

            </div>

        </div>
            )
};

export default Navbar;