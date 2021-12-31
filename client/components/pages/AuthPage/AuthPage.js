import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";

export const LOGIN = 'login';
export const REGISTER = 'register';

class AuthPage extends Component {

    render() {
        const pageType = this.props?.match?.params?.type
        return (
            <div className="AuthPage ">
                {pageType !== LOGIN && pageType !== REGISTER && <Redirect to={"/auth/login"} />}
                {pageType == LOGIN &&
                    <>
                        <div className="AuthPage">
                            <p className="title">Sign In</p>
                            <input type="email" placeholder="email" className="inputField" />
                            <input type="password" placeholder="password" className="inputField" />
                            <button> Sign In</button>
                        </div>
                        <Link className="hyperlink" to="/auth/register" >Create Account </Link>
                        <br />
                        <a className="hyperlink">forgot password </a>
                        <div className="backgroundImage" />
                    </>
                }
                {pageType == REGISTER &&
                    <>
                        <p className="title">Registration</p>
                        <p className="description">
                            Please, make sure your personal inforamtion is correct.
                            This information will be protected by Privacy policy
                        </p>
                        <form >
                            <input type="name" placeholder="Name" className="inputField" />
                            <input type="email" placeholder="Email" className="inputField" />
                            <input type="password" placeholder="Password" className="inputField" />
                            <input type="password" placeholder="Password" className="inputField" />
                            <div className="checkboxField" >
                                <input className="checkboxField" type="checkbox" required />
                                <p> &nbsp;I accept and agree to the&nbsp;
                                    <Link className="hyperlink" to="/terms" target="_blank"  >
                                        terms and conditions</Link> and
                                    <Link className="hyperlink" to="/privacy" target="_blank">&nbsp;Privacy Policy</Link>
                                </p>
                            </div>
                            <button type="submit"> Register</button>
                        </form>
                        <div className="backgroundImage" />
                    </>
                }
            </div>
        )
    }
}
export default AuthPage;
