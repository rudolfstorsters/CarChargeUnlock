import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

class AuthPage extends Component {

    render() {
        const status = this.props?.match?.params?.status
        console.log(status)
        return (
            <div className="AuthPage">
                <div>
                <p className="title">Registration</p>
                <p className="description">Please, make sure your personal inforamtion is correct.
                    This information will be protected by Privacy policy </p>
                    </div>
                    <form>
                        <input type="name" placeholder="name"></input>
                        <input type="email" placeholder="email"></input>
                        <input type="password" placeholder="password"></input>
                        <input type="password" placeholder="password"></input>
                        <button>
                            Register
                        </button>
                    </form>
                    <div className="backgroundImage"/>
            </div>

        )
    }

}
export default AuthPage;
