import React, {useState} from 'react'

export default () => {

    const [grades, setGrades] = useState(
        [5, 6, 7, 8, 9]
    )

    return grades.map((grade) => <p>{grade}</p>
    )
}