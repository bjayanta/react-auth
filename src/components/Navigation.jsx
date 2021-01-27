import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="container">
                        <ul>
                            <li><NavLink exact to='/'>Home</NavLink></li>
                            <li><NavLink exact to='/about'>About</NavLink></li>
                            <li><NavLink exact to='/contact'>Contact</NavLink></li>
                        </ul>

                        <ul>
                            <li><NavLink exact to='/login'>Login</NavLink></li>
                            <li><NavLink exact to='/register'>Register</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
    
}

export default Navigation
