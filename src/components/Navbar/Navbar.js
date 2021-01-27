import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css'
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <div className={classes.container}>

            <FontAwesomeIcon icon={faUserGraduate} size={"4x"}/>

            <div className={classes.item2}>
                <NavLink to={"/"} className={classes.link}>Home</NavLink>
                <NavLink to={"#"} className={classes.link}>About</NavLink>
                <NavLink to={"/articles"} className={classes.link}>Contacts</NavLink>
                <NavLink to={"#"} className={classes.link}>Login</NavLink>


                <div className={classes.social}>
                    <FontAwesomeIcon icon={faFacebook} size={"1x"} className={classes.socialLink}/>
                    <FontAwesomeIcon icon={faInstagram} size={"1x"} className={classes.socialLink}/>
                    <FontAwesomeIcon icon={faTwitter} size={"1x"} className={classes.socialLink}/>
                </div>
            </div>

        </div>
            )
};

export default Navbar;