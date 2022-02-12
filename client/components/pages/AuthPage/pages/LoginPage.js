import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Header from '../../../common/header';
import { connect } from "react-redux";

import { attemptLogin } from '_thunks/auth';

class LoginPageComponent extends Component {

    handleChange = (property) => (event) => {
        this.setState({ [property]: event.target.value }, () => {
        });
    }

    login = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        const user = { email, password };

        await this.props.attemptLogin(user);
        return;
    };

    render() {
        const {
            isActive
        } = this.props
        if (!isActive) {
            return null;
        }
        return (
            <>
                <form onSubmit={this.login}>
                    <div className="AuthPage">
                        <Header title="Sign In" />
                        <input
                            type="email"
                            onChange={this.handleChange('email')}
                            placeholder="Email"
                            className="inputField" />
                        <input
                            type="password"
                            onChange={this.handleChange('password')}
                            placeholder="Password"
                            className="inputField" />
                        <button >Sign In</button>
                    </div>
                    <br />
                    <Link className="hyperlink" to="/auth/register">Create Account</Link>
                    <br />
                    <Link className="hyperlink" to="/auth/forgot">Forgot Password</Link>
                </form>
                <div className="backgroundImage" />
            </>
        )
    }
}

export const LoginPage = connect(() => ({}), dispatch => ({
    attemptLogin: (user) => dispatch(attemptLogin(user))
}))(LoginPageComponent);
