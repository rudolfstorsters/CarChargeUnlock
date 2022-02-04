import React, { Component } from "react"
import Header from "../../common/header";

export const TESLA_ACCOUNT = 'tesla';
export const API_KEY = 'api';

class AuthMethod extends Component {

    render() {

        const type = this.props?.match?.params?.type;

        return (
            <div className="dashboardPage">
                {type == TESLA_ACCOUNT ?
                    <div className="AuthPage">

                        <Header title="Sign In Tesla Account" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="inputField" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="inputField" />
                        <input
                            type="number"
                            placeholder="Two Factor Code"
                            className="inputField marginFix" />
                        <p className="marginFix">(Optional)</p>
                        <button >Sign In</button>
                    </div>
                    :
                    <div className="AuthPage" >
                        <Header title="Sign In With API Key" />
                        <input
                            type="text"
                            placeholder="API Key"
                            className="inputField" />
                        <button >Sign In</button>
                    </div>
                }
            </div>
        )
    }
}
export default AuthMethod;