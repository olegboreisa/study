import React from 'react'
import classes from './Window.module.css'


export default (props) => (

    <div className={classes.container}>

        <div className={classes.pic}>
            <img alt="first" src={props.picture} />
        </div>

        <div className={classes.title}>
            <p>{props.title}</p>
        </div>

    </div>
)