import React from 'react';
import {NavLink, Link, useHistory} from "react-router-dom";
import classes from './Navbar.module.css'
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {removeJwt, removeUserData} from "../../store/Slices/UserSlice";
import ltu from "../Content/assets/pics/lt.png"
import usa from "../Content/assets/pics/usa.png"
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";


const Navbar = () => {

    const { t, i18n } = useTranslation('navbar')
    const history = useHistory()
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

    // [TOOGLE MENU]
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }


    return (
        <div className={classes.container}>

            {
                user === null ?
                    (<div className={classes.login}>
                        <FontAwesomeIcon icon={faUserGraduate} size={"4x"}/>
                        <span className={classes.username}>{t('signIn')}</span>
                    </div>)
                    :
                    (<div className={classes.login}>
                        <FontAwesomeIcon icon={faUserGraduate} size={"4x"} className={classes.active}/>
                        <span className={classes.username}>{t('greetings')} {user.username}{'!'}</span>

                        {
                            user.roles.includes('ADMIN') ?
                                (
                                    <Link to="/articles/add">
                                        <FontAwesomeIcon icon={faPlus} size={"1x"} className={classes.plus}/>
                                    </Link>
                                )
                                :
                                ''
                        }

                    </div>)
            }


            <div className={classes.item2}>
                <NavLink to={"/home"} className={classes.link}>{t('home')}</NavLink>
                <NavLink to={`/articles`} className={classes.link}>{t('articles')}</NavLink>
                {
                    user === null ?
                        (
                            <>
                            <Link className={classes.link} onClick={handleClick}>
                                {t('sign')}
                            </Link>
                        <Menu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem className={classes.menu}
                                      onClick={() => {
                                          history.push('/login')
                                          {handleClose()}
                                      }}
                            >{t('sign')}
                            </MenuItem>
                            <MenuItem className={classes.menu}
                                      onClick={() => {
                                          history.push('/signup')
                                          {handleClose()}
                                      }}
                            >{t('register')}
                            </MenuItem>
                        </Menu>
                            </>
                        )
                        :
                        (<Link className={classes.link} onClick={logout}>{t('logout')}</Link>)
                }
                <img src={ltu} className={classes.lang} onClick={() => languageHandler('lt')}/>
                <img src={usa} className={classes.lang} onClick={() => languageHandler('en')}/>
            </div>

        </div>
            )
};

export default Navbar