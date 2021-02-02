import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { logout } from "../services/actions/authAction";

class Navigation extends Component {
    render() {
        let loginMenu

        if(this.props.isLogged) {
            loginMenu = <>
                <li>{ this.props.username }</li>
                <li><button onClick={ () => this.props.logout() }>Logout</button></li>
            </>
        } else {
            loginMenu = <>
                <li><NavLink exact to="/login">Login</NavLink></li>
                <li><NavLink exact to="/register">Register</NavLink></li>
            </>
        }

        return (
            <div>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/task">Task</NavLink></li>
                    <li><NavLink exact to="/about">About</NavLink></li>
                    <li><NavLink exact to="/contact">Contact</NavLink></li>
                </ul>

                <ul>{ loginMenu }</ul>
            </div>
        )
    }
}

// state
const mapStateToProps = state => {
    return {
        isLogged: state.AuthReducer.isLogged,
        username: state.AuthReducer.username,
        error: state.AuthReducer.error
    }
}

// dispath
const mapDispatchToProps = () => {
    return {
        logout
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Navigation)
