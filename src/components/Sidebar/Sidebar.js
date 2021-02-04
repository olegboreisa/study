import React, {useEffect, useState} from 'react'
import classes from './Sidebar.module.css'
import {Link} from "react-router-dom";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { getCategories, deleteCategory } from '../../api/CategoryApi'

const Sidebar = () => {
    const [categories, setCategories] = useState ([])

    useEffect(() => {
        getCategories()
            .then(res => {
                setCategories(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const deleteCategoryHandler = (id) => {
        deleteCategory(id)
            .then(res => {
                console.log(res)
            })
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
                        <div className={classes.wrapper} key={cat.id}>

                            <Link to={cat.category} className={classes.link}>{cat.category} </Link>

                            <FontAwesomeIcon icon={faMinus} size={"1x"} onClick={() => deleteCategoryHandler(cat.id)} className={classes.minus}/>

                        </div>
                    ))
                }
            </div>
            <Link to="/categories/add" className={classes.plus}>
                <FontAwesomeIcon icon={faPlus} size={"2x"} />
            </Link>
        </div>

    )
}

export default Sidebar;