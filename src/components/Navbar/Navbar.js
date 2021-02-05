import React from 'react';
import {NavLink, Link} from "react-router-dom";
import classes from './Navbar.module.css'
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import { Button } from '@material-ui/core';
import {removeJwt, removeUserData} from "../../store/Slices/UserSlice";

const Navbar = () => {

    const { t } = useTranslation('navbar')
    const user = useSelector(state => state.user.userData)
    const dispatch = useDispatch() // [CALL REDUX USER ACTIONS]
    console.log(user)


    const logout = () => {
        dispatch(removeUserData())
        dispatch(removeJwt())
        console.log(user)
    }

    return (
        <div className={classes.container}>

            <FontAwesomeIcon icon={faUserGraduate} size={"4x"}/>

            <div className={classes.item2}>
                <NavLink to={"/home"} className={classes.link}>{t('home')}</NavLink>
                <NavLink to={"/articles"} className={classes.link}>{t('articles')}</NavLink>
                {
                    !!user ?
                        (
                            <Link className={classes.link} component={Button} onClick={logout}>{t('logout')}</Link>
                        )
                        :
                        (
                            <NavLink to="/login" className={classes.link}>{t('login')}</NavLink>
                        )
                }
            </div>

        </div>
            )
};

export default Navbar;