import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";

export const LOGIN = 'login';
export const REGISTER = 'register';
export const FORGOT = 'forgot';
export const RESET = 'reset';

const ResetPage = ({ isActive }) => isActive && (
    <>
        <form>
            <p className="title" >Reset Password</p>
            <input type="Password" placeholder="Password" className="inputField" />
            <input type="Password" placeholder="Re-Enter Password" className="inputField" />
            <button type="submit">Reset</button>
        </form>
        <div className="backgroundImage" />
    </>
)

const ForgotPage = ({ isActive }) => isActive && (
    <>
        <form>
            <p className="title">Forgot Password</p>
            <input type="email" placeholder="Email" className="inputField" />
            <button type="submit">Submit</button>
        </form>
        <div className="backgroundImage" />
    </>
)

const LoginPage = ({ isActive }) => isActive && (

    <>
        <div className="AuthPage">
            <p className="title">Sign In</p>
            <input type="email" placeholder="email" className="inputField" />
            <input type="password" placeholder="password" className="inputField" />
            <button>Sign In</button>
        </div>
        <br />
        <Link className="hyperlink" to="/auth/register">Create Account</Link>
        <br />
        <Link className="hyperlink" to="/auth/forgot">Forgot Password</Link>
        <div className="backgroundImage" />
    </>
)

const RegisterParge = ({ isActive }) => isActive && (
    <>
        <p className="title">Registration</p>
        <p className="description">
            Please, make sure your personal inforamtion is correct.
            This information will be protected by Privacy policy
        </p>
        <form>
            <input type="name" placeholder="Name" className="inputField" required />
            <input type="email" placeholder="Email" className="inputField" required />
            <input type="password" placeholder="Password" className="inputField" required />
            <input type="password" placeholder="Password" className="inputField" required />
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

class AuthPage extends Component {

    isValidAddress = () => {
        const pageType = this.props?.match?.params?.type;
        return pageType === LOGIN
            || pageType === REGISTER
            || pageType === FORGOT
            || pageType === RESET;
    }

    getToken = () => this.props?.match?.params?.token;

    render() {
        const pageType = this.props?.match?.params?.type;

        //console.warn(this.getToken());

        if (!this.isValidAddress()) {
            return (<Redirect to={"/auth/login"} />);
        }

        return (
            <div className="AuthPage ">
                <LoginPage isActive={pageType == LOGIN} />
                <RegisterParge isActive={pageType == REGISTER} />
                <ForgotPage isActive={pageType == FORGOT} />
                <ResetPage isActive={pageType == RESET} />
            </div>
        );
    }
}
export default AuthPage;
