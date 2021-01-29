import React from 'react'
import {Switch, Route} from "react-router";
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Categories from './pages/Categories/Categories'


const Content = () => (

        <Switch>
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route exact path="/" component={Categories}/>

        </Switch>

)
export default Content;