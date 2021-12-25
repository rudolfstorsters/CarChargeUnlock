import React from 'react';
import { Link } from 'react-router-dom';

const body = {
  minWidth: '320px',
  height: 'auto',
  overFlowY: 'hidden',
  overFlowX: 'hidden',
}

const btnContainer = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  zIndex: '1',
  position: 'relative',
  bottom: '45px',
  flexWrap: 'wrap',
  justifyContent: 'center',
}

const wrapContainer = {

  overFlow: 'hidden',
  flexWrap: 'wrap',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
}
const innerWrapContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  maxWidth: '693px',
  maxHeight: '598px',
}

const textConainer = {
  minWidth: '320px',
  marginBottom: '30px',
  textAlign: 'center',
  padding: '11px 0px ',
  position: 'relative',
}
const description = {
  color: '#7D7987',
  padding: ' 11px 0px',
  lineHeight: '32px',
  margin: "5.5px 0px",
  fontWeight: '400',
  fontSize: '16px',
}

const imageStyle = {
  width: '100%',
  maxWidth: '693px',
  height: '598px',
  bottom: '0px',
  objectFit: 'fill',
  position: "absolute",
  zIndex: '-1',
}

export default class WelcomePage extends React.Component {

  render() {
    return (
      <div className="home-page" style={body}>
        <div style={wrapContainer}>
          <div style={innerWrapContainer}>
            <div style={textConainer}>
              <div className="responsiveText">
                <h1 className="homeTitle">EV remote charge unlocking</h1>
                <div style={description}>
                  No more texting to neighbours,
                  or waiting for the owner to come back
                  just scan the QR code and unlock the
                  chargerBest way to share your EV charger
                  automaticly.
                </div>
              </div>
            </div>
            <div style={btnContainer}>
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
