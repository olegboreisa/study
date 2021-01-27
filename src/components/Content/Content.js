import React from 'react'
import {Switch, Route} from "react-router";
import Welcome from './pages/Welcome'
import Article from './pages/Articles'


const Content = () => (

    <div>
        <Switch>
            <Route exact path={"/"}>
                <Welcome />
            </Route>
            <Route exact path={"/articles"}>
                <Article />
            </Route>
        </Switch>
    </div>
)
export default Content;