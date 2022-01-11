import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { attemptRegister } from '_thunks/auth';
import { store as RNC } from 'react-notifications-component';

import Header from "../../../common/header";

class RegisterPageComponent extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        passwordRepeat: "",
    }

    handleChange = (property) => (event) => {
        this.setState({ [property]: event.target.value }, () => {
        });
    }

    register = async (event) => {
        console.warn(event);
        event.preventDefault();

        const {
            name,
            email,
            password,
            passwordRepeat
        } = this.state;
        if (password !== passwordRepeat) {
            RNC.addNotification({
                title: 'Error!',
                message: "Passwords do not match!",
                type: 'danger',
                container: 'top-right',
                animationIn: ['animated', 'fadeInRight'],
                animationOut: ['animated', 'fadeOutRight'],
                dismiss: {
                  duration: 5000,
                },
              });
            return;
        }
        const newUser = {
            name,
            email,
            password,
        };
        console.warn(this.props.attemptRegister);

        await this.props.attemptRegister(newUser);
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
                <Header
                    title="Registration"
                    description={
                        `Please, make sure your personal inforamtion is correct.
                This information will be protected by Privacy policy`
                    } />
                <br />
                <form onSubmit={this.register}>
                    <input type="name" placeholder="Name" onChange={this.handleChange('name')} className="inputField" required />
                    <input type="email" placeholder="Email" onChange={this.handleChange('email')} className="inputField" required />
                    <input type="password" placeholder="Password" onChange={this.handleChange('password')} className="inputField" required />
                    <input type="password" placeholder="Password" onChange={this.handleChange('passwordRepeat')} className="inputField" required />
                    <div className="checkboxField" >
                        <input className="checkboxField checkmark" type="checkbox" required />
                        <p> &nbsp;I agree to the&nbsp;
                            <Link className="hyperlink" to="/terms" target="_blank" >
                                terms & conditions</Link> and
                            <Link className="hyperlink" to="/privacy" target="_blank">&nbsp;Privacy Policy</Link>
                        </p>
                    </div>
                    <button type="submit">Register</button>
                </form>
                <div className="backgroundImage" />
            </>
        );
    }
}

export const RegisterPage = connect(() => ({}), dispatch => ({
    attemptRegister: (user) => dispatch(attemptRegister(user))
}))(RegisterPageComponent);