import classes from "./ArticleListBox.module.css"
import {Link} from "react-router-dom";
import ArticleBox from "./ArticleBox";
import React from "react";


export default ({dataFromParentToChild}) => {

    return (
        <div className={classes.container}>
            {
                dataFromParentToChild.map(article => (
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