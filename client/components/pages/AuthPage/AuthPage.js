import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";

import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ForgotPage } from './pages/ForgotPage';
import { ResetPage } from './pages/ResetPage';

export const LOGIN = 'login';
export const REGISTER = 'register';
export const FORGOT = 'forgot';
export const RESET = 'reset';

export default class AuthPage extends Component {

    isValidAddress = () => {
        const pageType = this.props?.match?.params?.type;
        return pageType === LOGIN
            || pageType === REGISTER
            || pageType === FORGOT
            || pageType === RESET;
    }

    getToken = () => this.props?.location.pathname.replace('/auth/reset/', '');

    render() {
        const pageType = this.props?.match?.params?.type;

        if (!this.isValidAddress()) {
            return (<Redirect to={"/auth/login"} />);
        }

        return (
            <div className="AuthPage ">
                <LoginPage isActive={pageType == LOGIN} />
                <RegisterPage isActive={pageType == REGISTER} />
                <ForgotPage isActive={pageType == FORGOT} />
                <ResetPage token={this.getToken()} isActive={pageType == RESET} />
            </div>
        );
    }
}