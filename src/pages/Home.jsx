import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class Home extends Component {

    render() {
        if(!this.props.isLoggedIn) {
            return <Redirect to='/login' />
        }

        return (
            <div className="container">
                Home
                { this.props.isLoggedIn.toString() } 
            </div>
        )
    }
}

// state
const mapStateToProps = state => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        user: state.loginReducer.user,
    }
}

export default connect(mapStateToProps)(Home)