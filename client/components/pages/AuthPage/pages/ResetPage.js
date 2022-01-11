import React, { Component } from "react";
import Header from "../../../common/header";
import { connect } from "react-redux";

import { attemptReset } from '_thunks/auth';


class ResetPageComponent extends Component {

    handleChange = (property) => (event) => {
        this.setState({ [property]: event.target.value }, () => {
        });
    }

    reset = async (event) => {
        event.preventDefault();

        const {
            password,
        } = this.state;

        const user = {
            password,
            id: this.props.token,
        };
        console.warn(this.props)
        try {
            await this.props.attemptReset(user);
        } catch (error) { }
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
                <form onSubmit={this.reset}>
                    <Header title="Reset Password" />
                    <input onChange={this.handleChange("password")} name="password" type="Password" placeholder="Password" className="inputField" required />
                    <input type="Password" placeholder="Re-Enter Password" className="inputField" required />
                    <button type="submit">Reset</button>
                </form>
                <div className="backgroundImage" />
            </>
        )
    }
} export const ResetPage = connect(() => ({}), dispatch => ({
    attemptReset: (user) => dispatch(attemptReset(user))
}))(ResetPageComponent);