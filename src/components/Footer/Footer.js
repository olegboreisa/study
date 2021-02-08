import React from 'react'
import classes from "../Footer/Footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation('footer')

    return (
        <div className={classes.container}>
                <h5>{t('media')}</h5>

                <div>
                    <FontAwesomeIcon icon={faFacebook} size={"2x"} className={classes.socialLink}/>
                    <FontAwesomeIcon icon={faInstagram} size={"2x"} className={classes.socialLink}/>
                    <FontAwesomeIcon icon={faTwitter} size={"2x"} className={classes.socialLink}/>
                </div>


                <p>{t('follow')}</p>

        </div>
    )
}

export default Footer;