import React from 'react'
import Window from "../../Window";
import classes from './Welcome.module.css'
import one from '../../assets/pics/one.jpg'
import two from '../../assets/pics/two.jpg'
import three from '../../assets/pics/three.jpg'
import four from '../../assets/pics/four.jpg'

export default () => (
    <div className={classes.container}>

        <div className={classes.row}>
            <div className={classes.column}><Window picture={one} title={"One"}/></div>
            <div className={classes.column}><Window picture={two} title={"One"}/></div>
        </div>


        <div className={classes.row}>
            <div className={classes.column}><Window picture={three} title={"One"}/></div>
            <div className={classes.column}><Window picture={four} title={"One"}/></div>
        </div>

    </div>

)

