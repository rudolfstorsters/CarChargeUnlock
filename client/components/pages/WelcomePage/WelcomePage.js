import { push } from 'connected-react-router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import R from 'ramda';

class WelcomePageComponent extends Component {

  render() {
    
    const { user } = this.props
    const auth = !R.isEmpty(user)
    return (
      <div className="homePage body">
        <div className="wrapContainer">
          <div className="innerWrapContainer">
            <div className="textConainer">
              <div className="responsiveText">
                <h1 className="homeTitle">EV remote charge unlocking</h1>
                <div className="description">
                  No more texting to neighbours,
                  or waiting for the owner to come back
                  just scan the QR code and unlock the
                  charger <br />Best way to share your EV charger
                  automaticly.
                </div>
              </div>
            </div>
            <div className="btnContainer">
              <Link to="/scan">
                <div className="homeNavBtn">
                  SCAN
                </div>
              </Link>
              <Link to={auth ? "/dashboard" : "/auth/login"}>
                <div className="homeNavBtn">
                  MANAGE
                </div>
              </Link>
            </div>
          </div>
          <div className="backgroundImage" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  pushRoute: (route) => dispatch(push(route))
});
export default connect(mapStateToProps, mapDispatchToProps)(WelcomePageComponent);