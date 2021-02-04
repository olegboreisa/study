import React from 'react'
import {Switch, Route} from "react-router";
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Categories from './pages/Articles/Articles'
import CategoryAdd from "../Sidebar/AddCategory";
import ArticleAdd from "./pages/Articles/Article/AddArticle";
import SingleArtById from "./pages/Articles/Article/Article";
import UpdateArt from "./pages/Articles/Article/UpdateArticle";
import Login from './pages/Login/Login'


const Content = () => (

        <Switch>
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/login" component={Login} />
            <Route path="/categories/add" component={CategoryAdd} />
            <Route path="/api/articles/:id" component={SingleArtById} />
            <Route path="/articles/add" component={ArticleAdd} />
            <Route path="/api/articles/update/:id" component={UpdateArt} />
            <Route exact path="/" component={Categories}/>
        </Switch>

)
export default Content;