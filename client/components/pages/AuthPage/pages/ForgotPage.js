import React from "react"
import Header from "../../../common/header"

export const ForgotPage = ({ isActive }) => isActive && (
    <>
        <form>
            <Header title="Forgot Password"/>
            <input type="email" placeholder="Email" className="inputField" required />
            <button type="submit">Submit</button>
        </form>
        <div className="backgroundImage" />
    </>
)
