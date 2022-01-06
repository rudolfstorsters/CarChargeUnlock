import React from 'react'
import { Link } from "react-router-dom";
import Header from '../../../common/header';

export const LoginPage = ({ isActive }) => isActive && (

    <>
        <div className="AuthPage">  
            <Header title ="Sign In" />
            <input type="email" placeholder="Email" className="inputField" />
            <input type="password" placeholder="Password" className="inputField" />
            <button>Sign In</button>
        </div>
        <br />
        <Link className="hyperlink" to="/auth/register">Create Account</Link>
        <br />
        <Link className="hyperlink" to="/auth/forgot">Forgot Password</Link>
        <div className="backgroundImage" />
    </>
)

