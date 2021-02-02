import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// pages
import Home from "../pages/Home";
import Task from "../pages/task/Index";
import TaskEdit from "../pages/task/Edit";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/NotFound";

export default class AppRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/task" component={ Task } />
                    <Route exact path="/tasks/edit/:id" component={ TaskEdit } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/contact" component={ Contact } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/register" component={ Register } />
                    <Route component={ NotFound } />
                </Switch>
            </div>
        )
    }
}
