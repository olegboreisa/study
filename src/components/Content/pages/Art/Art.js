import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {NavLink, Route} from 'react-router-dom'
import {Switch} from "react-router";
import MultipleArt from "./MultipleArt";
import SingleArtById from "./SingleArtById";


export default () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get('/art')
            .then(response => {
                console.log(response.data)
                setArticles(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
           <Switch>
               <Route exact path='/art'>
                   <MultipleArt articles={articles} />
               </Route>
               <Route
                   path='/art/:id'>
                   <SingleArtById />
               </Route>
           </Switch>
    )
}