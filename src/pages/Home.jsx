import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    render() {
        // check logged in or not 
        if(!this.props.isLogged) {
            return <Redirect to="/login" />
        }

        return (
            <div>
                Home
                <h3>Welcome { this.props.username }</h3>
            </div>
        )
    }
}

// state
const mapStateToProps = state => {
    return {
        isLogged: state.AuthReducer.isLogged,
        username: state.AuthReducer.username,
        email: state.AuthReducer.email,
        error: state.AuthReducer.error
    }
}

export default connect(mapStateToProps)(Home)
