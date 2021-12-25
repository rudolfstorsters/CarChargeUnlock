import React from 'react';
import { Link } from 'react-router-dom';

export default class WelcomePage extends React.Component {

  render() {
    return (
      <div className="home-page body" >
        <div className="wrapContainer">
          <div className="innerWrapContainer">
            <div className="textConainer">
              <div className="responsiveText">
                <h1 className="homeTitle">EV remote charge unlocking</h1>
                <div className="description">
                  No more texting to neighbours,
                  or waiting for the owner to come back
                  just scan the QR code and unlock the
                  chargerBest way to share your EV charger
                  automaticly.
                </div>
              </div>
            </div>
            <div className="btnContainer">
              <Link to="/Scan">
                <div className="homeNavBtn">
                  SCAN
                </div>
              </Link>
              <Link to="/login">
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
