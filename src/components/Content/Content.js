import React from 'react'
import {Switch, Route} from "react-router";
import Welcome from './pages/Welcome/Welcome'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'


const Content = () => (

    <div>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path exact="/articles" component={Welcome} />
        </Switch>
    </div>
)
export default Content;