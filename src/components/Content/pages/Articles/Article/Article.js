import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from "react-router";
import classes from './Article.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWrench, faTrash} from "@fortawesome/free-solid-svg-icons";
import {deleteArticle, getArticle, updateArticle} from "../../../../../api/ArticleApi";
import img from "../../../assets/pics/art.jpg";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

export default () => {

    const [article, setArticle] = useState({})
    const user = useSelector(state => state.user.userData)
    const { t } = useTranslation('singleArticle')
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        getArticle(id)
                .then(response => {
                        setArticle(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
    }, [])


    const deleteArticleHandler = () => {
        deleteArticle(id)
            .then(res => {
                history.push('/articles')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className={classes.container}>

            <div className={classes.elemUp}>
                <span></span>
            </div>

            <div className={classes.elemDown}>

                <div className={classes.left}>

                    <div className={classes.title}>
                        {article.title}
                    </div>

                    <div className={classes.photo}>
                        <img src={img}/>
                    </div>

                </div>

                <div className={classes.right}>

                    <div className={classes.text}>
                        {article.text}
                    </div>

                    <div className={classes.options}>

                        <div className={classes.date}>{article.date}</div>

                        {
                            user && user.roles.includes('ADMIN') ?
                                (
                                <div className={classes.icons}>

                                    <div className={classes.update}>
                                        <Link
                                            to={{
                                                pathname:  `/articles/update/${id}`,
                                                aboutProps: {article}
                                            }}>
                                            <FontAwesomeIcon icon={faWrench} size={"2x"}/>
                                        </Link>
                                    </div>

                                    <div className={classes.delete}>
                                        <FontAwesomeIcon icon={faTrash} size={"2x"} onClick={deleteArticleHandler}/>
                                    </div>

                                </div>
                            )
                                :
                                ''

                        }

                    </div>

                </div>

            </div>

            <div className={classes.commentContainer}>

                <div className={classes.existingComments}>
                    {/*{*/}
                    {/*    comments.map(comment => {*/}
                    {/*        return (*/}
                    {/*            <div className={classes.comment}>*/}
                    {/*                <h6>{comment.name} {comment.date}</h6>*/}
                    {/*                <p>{comment.text}</p>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                </div>


                <div className={classes.addComment}>
                    {
                        user && user.roles.includes('USER') ?
                            (
                                <form>
                                    <div className="form-group">
                                        <h4>{t('comment')}</h4>
                                        <label htmlFor="message">{t('message')}</label>
                                        <textarea name="msg" id="msg" cols="30" rows="5" className="form-control"/>
                                    </div>

                                    <Button type="submit">{t('post')}</Button>

                                    <Button type="submit">{t('section')}</Button>

                                </form>
                            )
                            :
                            ''
                    }
                </div>

            </div>

        </div>
    )
}





