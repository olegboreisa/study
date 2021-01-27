import React from 'react'
import classes from "../Footer/Footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className={classes.container}>
                <h5>Social Media</h5>

                <div>
                    <FontAwesomeIcon icon={faFacebook} size={"2x"} className={classes.socialLink}/>
                    <FontAwesomeIcon icon={faInstagram} size={"2x"} className={classes.socialLink}/>
                    <FontAwesomeIcon icon={faTwitter} size={"2x"} className={classes.socialLink}/>
                </div>


                <p>Reserved by Oleg Boreiša &copy; 2021</p>

        </div>
    )
}

export default Footer;