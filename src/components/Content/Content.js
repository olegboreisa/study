import React from 'react'
import {Switch, Route} from "react-router";
import CategoryAdd from "../Sidebar/AddCategory";
import AddArticle from "./pages/Articles/Article/AddArticle";
import Article from "./pages/Articles/Article/Article";
import UpdateArt from "./pages/Articles/Article/UpdateArticle";
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Articles from './pages/Articles/Articles'
import SignUp from "./pages/Login/SignUp"
import ArticlesByCategory from "./pages/Articles/ArticlesByCategory";

const Content = () => (

        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/articles/categories/:id" component={ArticlesByCategory} />
            <Route path="/articles/update/:id" component={UpdateArt} />
            <Route path="/articles/add" component={AddArticle} />
            <Route path="/articles/:id" component={Article} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/home" component={Home}/>
            <Route exact path="/" component={Home}/>
        </Switch>

)
export default Content;