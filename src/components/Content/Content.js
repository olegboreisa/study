import React from 'react'
import {Switch, Route} from "react-router";
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Categories from './pages/Categories/Categories'
import CategoryAdd from "./pages/Categories/CategoryAdd";
import ArticleAdd from "./ArticleAddTable/ArticleAdd";
import SingleArtById from "./pages/Art/SingleArtById";


const Content = () => (

        <Switch>
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/categories/add" component={CategoryAdd} />
            <Route path="/api/articles/:id" component={SingleArtById} />
            <Route path="/articles/add" component={ArticleAdd} />
            <Route exact path="/" component={Categories}/>
        </Switch>

)
export default Content;