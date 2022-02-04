import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import R from 'ramda';

class AddCarPage extends Component {

    componentDidMount() {
        if (R.isEmpty(this.props?.user ?? {})) {
            this.props?.pushRoute?.('/auth/login');
        }
    }
    render() {
        const type = this.props?.match?.params?.type;
        const auth = !R.isEmpty(user)
        const { user } = this.props;
        
        return (
            <div className="dashboardPage">
                {console.log(type)}
                <h1 className="homeTitle">Choose authentication method: </h1>
                <Link to= {auth ? "/add/tesla" : "/auth/login"}>
                    <div className="homeNavBtn">Tesla Account</div>
                </Link>
                <hr ></hr>
                <Link to="/add/api">
                    <div className="homeNavBtn">API key</div>
                </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCarPage);
