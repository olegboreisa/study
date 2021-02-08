import React from 'react'
import classes from './Home.module.css'
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default () => {


    return (
        <div className={classes.container}>

            <div className={classes.logo}>
                <FontAwesomeIcon icon={faUserGraduate} size={"10x"} className="animate__animated animate__backInDown animate__repeat-1"/>
            </div>
            <div className={classes.welcome}>
                <h1 className="animate__animated animate__bounce animate__repeat-2">Coming Soon</h1>
                <p>Best Educational Website!</p>
                <p>Reserved by Oleg Boreiša &copy; 2021</p>
            </div>

        </div>
    )
}
