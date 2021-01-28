import React, {useState} from 'react'
import classes from './Sidebar.module.css'
import {Link} from "react-router-dom";



const Sidebar = () => {
    const [categories, setCategories] = useState (
        [
            {id: 1, path: '/art', cat: 'Art'},
            {id: 2, path: '/citizenship', cat: 'Citizenship'},
            {id: 3, path: '/geography', cat: 'Geography'},
            {id: 4, path: '/history', cat: 'History'},
            {id: 5, path: '/languages', cat: 'Languages'},
            {id: 6, path: '/literacy', cat: 'Literacy'},
            {id: 7, path: '/music', cat: 'Music'},
            {id: 8, path: '/pe', cat: 'Physical Education'},
            {id: 9, path: '/science', cat: 'Science'},
            {id: 10, path: '/it', cat: 'Information Technology'}
        ]
    )

    return (
        <div className={classes.container}>
            <h3 style={{textDecoration: "underline"}}>Categories</h3>
            <div className={classes.cat}>
                {
                    categories.map(cat => (
                        <Link to={cat.path} key={cat.id} className={classes.link}>{cat.cat}</Link>

                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;