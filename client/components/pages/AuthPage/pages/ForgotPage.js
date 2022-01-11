import React, { Component } from "react"
import Header from "../../../common/header"
import { connect } from "react-redux";
import { attemptForgot } from '_thunks/auth';

class ForgotPageComponent extends Component {
    handleChange = (property) => (event) => {
        this.setState({ [property]: event.target.value }, () => {
        });
    }

    forgot = async (event) => {
        event.preventDefault();

        const {
            email,
        } = this.state;
        
        const user = {
            email,
        };
        console.warn(this.props.attemptForgot);

        await this.props.attemptForgot(user);
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
                <form onSubmit={this.forgot}>
                    <Header title="Forgot Password" />
                    <input onChange={this.handleChange('email')} type="email" placeholder="Email" className="inputField" required />
                    <button type="submit">Submit</button>
                </form>
                <div className="backgroundImage" />
            </>
        )
    }
}
export const ForgotPage = connect(() => ({}), dispatch => ({
    attemptForgot: (user) => dispatch(attemptForgot(user))
}))(ForgotPageComponent);