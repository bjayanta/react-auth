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
                { (this.props.loading) ? <h1>Loading ...</h1> : '' }
                { this.props.isLoggedIn.toString() } 
            </div>
        )
    }
}

// state
const mapStateToProps = state => {
    return {
        loading: state.authReducer.loading,
        isLoggedIn: state.authReducer.isLoggedIn,
        user: state.authReducer.user,
    }
}

export default connect(mapStateToProps)(Home)