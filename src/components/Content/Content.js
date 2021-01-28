import React from 'react'
import {Switch, Route} from "react-router";
import Welcome from './pages/Welcome/Welcome'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Art from "./pages/Art/Art";

const Content = () => (

        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path='/art' component={Art}/>
        </Switch>

)
export default Content;