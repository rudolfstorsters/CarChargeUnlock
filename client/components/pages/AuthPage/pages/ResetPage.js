import React from "react";
import Header from "../../../common/header";

export const ResetPage = ({ isActive }) => isActive && (
    <>
        <form>
            <Header title="Reset Password" />
            <input type="Password" placeholder="Password" className="inputField" required />
            <input type="Password" placeholder="Re-Enter Password" className="inputField" required />
            <button type="submit">Reset</button>
        </form>
        <div className="backgroundImage" />
    </>
)