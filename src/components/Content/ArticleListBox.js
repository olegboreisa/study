import classes from "./ArticleListBox.module.css"
import {Link} from "react-router-dom";
import ArticleBox from "./ArticleBox";
import React from "react";
import {useSelector} from "react-redux";



export default ({data}) => {

    return (
        <div className={classes.container}>
            {
            data.map(article => (
                <div className={classes.item}>
                    <Link to={`/articles/${article.id}`} className={classes.link}>
                        <ArticleBox title={article.title} />
                    </Link>
                </div>
                ))
            }
        </div>
    )
}
