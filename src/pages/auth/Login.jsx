import React, { Component } from 'react'
import { connect } from "react-redux";
import { login } from "../../services/actions/authAction";
import { Redirect } from "react-router-dom";

class Login extends Component {
    credential = {
        "email": "bjayanta.neo@gmail.com",
        "password": "123456"
    }

    render() {

        if(this.props.isLoggedIn) {
            return <Redirect to='/' />
        }
        
        return (
            <div className="container">
                <h3>Login</h3>

                <button onClick={ () => this.props.login(this.credential) }>Login</button>

                { (this.props.loading) ? <h4>Loading ...</h4> : '' }
                <p>{ this.props.isLoggedIn }</p>
                {/* <p>{ this.props.user }</p> */}
                <p>{ this.props.error }</p>
            </div>
        )
    }
}

// state
const mapStateToProps = (state) => {
    return {
        loading: state.authReducer.loading,
        isLoggedIn: state.authReducer.isLoggedIn,
        user: state.authReducer.user,
        error: state.authReducer.error,
    }
}

// dispatch
const mapDispatchToProps = () => {
    return {
        login
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Login)
