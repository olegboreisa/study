import React, {useState} from 'react'
import classes from './Sidebar.module.css'


const Sidebar = () => {
    const [modules, setModules] = useState (
        [
            {id: 1, cat: 'Art'},
            {id: 2, cat: 'Citizenship'},
            {id: 3, cat: 'Geography'},
            {id: 4, cat: 'History'},
            {id: 5, cat: 'Languages'},
            {id: 6, cat: 'Literacy'},
            {id: 7, cat: 'Music'},
            {id: 8, cat: 'Physical Education'},
            {id: 9, cat: 'Science'},
            {id: 10, cat: 'Information Technology'}
        ]
    )

    return (
        <div className={classes.container}>
            <h3 style={{textDecoration: "underline"}}>Categories</h3>
            <div className={classes.cat}>
                {
                    modules.map((sub) => (
                        <p key={sub.id}>{sub.cat}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;