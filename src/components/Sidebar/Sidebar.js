import React, {useEffect, useState} from 'react'
import classes from './Sidebar.module.css'
import {Link} from "react-router-dom";
import axios from 'axios';
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Sidebar = () => {
    const [categories, setCategories] = useState ([])

    useEffect(() => {
        loadCategories()
    }, [])

    const loadCategories = () => {
        axios.get('/api/categories')
            .then(response => {
                setCategories(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }


    const deleteCategory = (id) => {
        axios.delete(`api/categories/delete/${id}`)
            .then(() => loadCategories)
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className={classes.container}>
            <h3 style={{textDecoration: "underline"}}>Categories</h3>
            <div className={classes.cat}>
                {
                    categories.map(cat => (
                        <div className={classes.wrapper}>

                            <Link to={cat.categoryName} key={cat.id} className={classes.link}>{cat.categoryName} </Link>

                            <FontAwesomeIcon icon={faMinus} size={"1x"} onClick={() => deleteCategory(cat.id)} className={classes.minus}/>

                        </div>
                    ))
                }
            </div>
            <Link to="/categories/add" className={classes.plus}>
                <FontAwesomeIcon icon={faPlus} size={"1x"} />
            </Link>
        </div>

    )
}

export default Sidebar;