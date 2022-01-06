import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../common/header";

export const RegisterPage = ({ isActive }) => isActive && (
    <>
        <Header
            title="Registration"
            description={
                `Please, make sure your personal inforamtion is correct.
                This information will be protected by Privacy policy`
            } />
        <br />
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
