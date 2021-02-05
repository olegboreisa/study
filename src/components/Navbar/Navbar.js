import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css'
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

const Navbar = () => {

    const { t, i18n } = useTranslation()

    const languageHandler = (lang) => {
    }

    return (
        <div className={classes.container}>

            <FontAwesomeIcon icon={faUserGraduate} size={"4x"}/>

            <div className={classes.item2}>
                <NavLink to={"/home"} className={classes.link}>Home</NavLink>
                <NavLink to={"/articles"} className={classes.link}>Articles</NavLink>
                <NavLink to={"/login"} className={classes.link}>Login</NavLink>
                <button onClick={() => languageHandler('en')}></button>
                <button onClick={() => languageHandler('lt')}></button>
            </div>

        </div>
            )
};

export default Navbar;