import React, { Component } from "react"
import Header from "../../common/header";

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import R from 'ramda';

export const TESLA_ACCOUNT = 'tesla';
export const API_KEY = 'api';

class AuthMethod extends Component {

    componentDidMount() {
        if (R.isEmpty(this.props?.user ?? {})) {
          this.props?.pushRoute?.('/auth/login');
        }
      }

    render() {

        const type = this.props?.match?.params?.type;
        const { user } = this.props;
        const auth = !R.isEmpty(user)

        return (
            <div className="dashboardPage">
                {type !== TESLA_ACCOUNT && type !== API_KEY && !auth ? <Redirect path={"/"} /> : null}
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
const mapStateToProps = ({ user }) => ({
    user,
});
const mapDispatchToProps = (dispatch) => ({
    pushRoute: (route) => dispatch(push(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthMethod);;