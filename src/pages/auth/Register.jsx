import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registration } from "../../services/actions/authAction";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    formHandler = (e) => {
        e.preventDefault()

        // register
        this.props.registration(this.state)
    }

    render() {
        // check login value
        if(this.props.isLogged) {
            return <Redirect to="/" />
        }

        return (
            <div>
                <h3>Register</h3>
                <form onSubmit={ this.formHandler }>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={ (e) => this.setState({[e.target.name]: e.target.value}) } id="name"/>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={ (e) => this.setState({[e.target.name]: e.target.value}) } id="email"/>
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={ (e) => this.setState({[e.target.name]: e.target.value}) } id="password"/>
                    </div>

                    <button type="submit">Submit</button>
                </form>

                { (this.props.loading) ? <h4>Loading ...</h4> : '' }
                <p>{ this.props.message }</p>
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
        registration
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Register)