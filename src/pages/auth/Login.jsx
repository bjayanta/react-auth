import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { login } from "../../services/actions/authAction";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            "email": "",
            "password": ""
        }
    }

    formSubmitHandler = (e) => {
        e.preventDefault()
        this.props.login(this.state)
    }

    render() {
        // check login value
        if(this.props.isLogged) {
            return <Redirect to="/" />
        }

        return (
            <div>
                <h3>Login</h3>
                <p>{ this.props.message }</p>

                <form onSubmit={ this.formSubmitHandler  }>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={ (e) => this.setState({[e.target.name]: e.target.value}) } />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={ (e) => this.setState({[e.target.name]: e.target.value}) } />
                    </div>

                    <button type="submit">Login</button>
                </form>

                { (this.props.loading) ? <h4>Loading ...</h4> : '' }
                <p>{ this.props.error }</p>
            </div>
        )
    }
}

// state
const mapStateToProps = state => {
    return {
        loading: state.AuthReducer.loading,
        isLogged: state.AuthReducer.isLogged,
        message: state.AuthReducer.message,
        error: state.AuthReducer.error
    }
}

// dispath
const mapDispatchToProps = () => {
    return {
        login
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Login)
