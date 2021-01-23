import React, {useState} from 'react'
import classes from './Sidebar.module.css'
import Grades from './Grades'


const Sidebar = () => {
    const [modules, setModules] = useState (
        ['Biology', 'Chemistry', 'Mathematics', 'Sciences', 'Sports']
    )
    const [clicked, setClicked] = useState (
        false
    )

    const moodMap = modules.map((sub) =>
            <p onMouseEnter={() => setClicked(true)}
               onMouseLeave={() => setClicked(false)}>
                {sub}</p>
        )

    return (
        clicked ?
            (<div className={classes.container}>
                    <h5>Modules</h5>
                    {moodMap}
                    <Grades/>
            </div>)
            :
            (<div className={classes.container}>
                <h5>Modules</h5>
                {moodMap}
            </div>
                )
            )
        }

export default Sidebar;