import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './UIFolderStructure/5Pages/About/about';
import Home from './UIFolderStructure/5Pages/Home/home';
import NotFound from './UIFolderStructure/5Pages/PageNotFound/NotFound';
import Login from './UIFolderStructure/5Pages/Login/login'
import Register from './UIFolderStructure/5Pages/Register/register'
export default class Layout extends Component {
    render() {
        return (
            <div className="layout-router-wrapper">
                <Router>
                    <div className="parent-wrapper">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

