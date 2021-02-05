import React from 'react';
import {NavLink, Link} from "react-router-dom";
import classes from './Navbar.module.css'
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {removeJwt, removeUserData} from "../../store/Slices/UserSlice";
import ltu from "../Content/assets/pics/lt.png"
import usa from "../Content/assets/pics/usa.png"

const Navbar = () => {

    const { t, i18n } = useTranslation('navbar')
    const user = useSelector(state => state.user.userData)
    const dispatch = useDispatch() // [CALL REDUX USER ACTIONS]

    const logout = () => {
        dispatch(removeUserData())
        dispatch(removeJwt())
    }

    // [CHANGE LANGUAGE]
    const languageHandler = (lang) => {
        i18n.changeLanguage(lang).then(() =>
        null)
    }

    return (
        <div className={classes.container}>

            {
                user === null ?
                    (<div className={classes.login}>
                        <FontAwesomeIcon icon={faUserGraduate} size={"4x"}/>
                        <span className={classes.username}>{t('sign')}</span>
                    </div>)
                    :
                    (<div className={classes.login}>
                        <FontAwesomeIcon icon={faUserGraduate} size={"4x"} className={classes.active}/>
                        <span className={classes.username}>{t('greetings')} {user.username}{'!'}</span>
                    </div>)
            }


            <div className={classes.item2}>
                <NavLink to={"/home"} className={classes.link}>{t('home')}</NavLink>
                <NavLink to={"/articles"} className={classes.link}>{t('articles')}</NavLink>
                {
                    user === null ?
                        (<NavLink to="/login" className={classes.link}>{t('login')}</NavLink>)
                        :
                        (<Link className={classes.link} onClick={logout}>{t('logout')}</Link>)
                }
                <img src={ltu} className={classes.lang} onClick={() => languageHandler('lt')}/>
                <img src={usa} className={classes.lang} onClick={() => languageHandler('en')}/>
            </div>

        </div>
            )
};

export default Navbar;