import React, {useEffect, useState} from 'react'
import classes from './Sidebar.module.css'
import {Link} from "react-router-dom";
import axios from 'axios';



const Sidebar = () => {
    const [categories, setCategories] = useState ([])

    useEffect(() => {
        axios.get('/api/categories')
            .then(response => {
                setCategories(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className={classes.container}>
            <h3 style={{textDecoration: "underline"}}>Categories</h3>
            <div className={classes.cat}>
                {
                    categories.map(cat => (
                        <Link to={cat.categoryName} key={cat.id} className={classes.link}>{cat.categoryName}</Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;