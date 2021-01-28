import React from 'react'
import {useParams} from "react-router";

export default (props) => {
    const params = useParams()



    return (
        <h1>{JSON.stringify(params)}</h1>
        )
}
