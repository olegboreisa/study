import React from 'react'
import classes from './ArticleBox.module.css'
import img from './assets/pics/art.jpg'


export default (props) => (

        <div className={classes.container}>
                <div className={classes.item}>
                        <img src={img}/>
                        <p>{props.title}</p>
                </div>
        </div>

)