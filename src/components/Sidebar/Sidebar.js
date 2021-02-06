import React, {useEffect, useState} from 'react'
import classes from './Sidebar.module.css'
import {Link} from "react-router-dom";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Sidebar = () => {
    const categories = [
        {id: 1, path: '/articles/biology', name: "Biology"},
        {id: 2, path: '/articles/chemistry', name: "Chemistry"},
        {id: 3, path: '/articles/art', name: "Art"},
        {id: 4, path: '/articles/music', name: "Music"},
        {id: 5, path: '/articles/mathematics', name: "Mathematics"}
    ]


    return (
        <div className={classes.container}>
            <h3 style={{textDecoration: "underline"}}>Categories</h3>
            <div className={classes.cat}>
                {
                    categories.map(cat => (
                        <div className={classes.wrapper} key={cat.id}>

                            <Link to={cat.path} className={classes.link}>{cat.name}</Link>

                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Sidebar;