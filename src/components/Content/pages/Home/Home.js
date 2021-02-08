import React from 'react'
import classes from './Home.module.css'
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslation} from "react-i18next";

export default () => {

    const { t } = useTranslation('home')

    return (
        <div className={classes.container}>

            <div className={classes.logo}>
                <FontAwesomeIcon icon={faUserGraduate} size={"10x"} className="animate__animated animate__backInDown animate__repeat-1"/>
            </div>
            <div className={classes.welcome}>
                <h1 className="animate__animated animate__bounce animate__repeat-2">{t('soon')}</h1>
                <p>{t('best')}</p>
                <p>{t('by')} Oleg Boreiša &copy; 2021</p>
            </div>

        </div>
    )
}
