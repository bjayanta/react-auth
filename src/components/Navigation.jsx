import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from "react-redux";
import { logout } from "../services/actions/authAction";

class Navigation extends Component {
    render() {
        var loginBeforeBtn = <>
            <li className="nav-item"><NavLink className="nav-link" exact to='/login'>Login</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" exact to='/register'>Register</NavLink></li>
            </>
        var loginAfterBtn = <li className="nav-item"><button onClick={ () => this.props.logout() }>Logout</button></li>

        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link to='/' className="navbar-brand">MaxSOP</Link>

                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink className="nav-link" exact to='/'>Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" exact to='/about'>About</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" exact to='/contact'>Contact</NavLink></li>
                            
                            {/* auth */}
                            { (!this.props.isLoggedIn) ? loginBeforeBtn : loginAfterBtn }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
    
}

// state
const mapStateToProps = state => {
    return {
        isLoggedIn: state.authReducer.isLoggedIn
    }
}

// Dispatch
const mapDispatchToProps = () => {
    return {
        logout
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Navigation);
