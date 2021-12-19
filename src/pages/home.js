
import React from "react";

import { BrowserRouter as Router, Route, Routes, BrowserRouter, NavLink, Link } from 'react-router-dom';
import Image from '../components/images/trafalgar-header illustration 1.png'


const btnContainer ={
    display: 'flex',
    flexDirection: 'column',
    alignItems:  'center',
    bottom: '-100px',
    position: 'relative',
    
}

const buttonStyle ={
    transition: 'box-shadow .3s',
    width:'230px',
    height:'56px',
    margin: '18px', 
    borderRadius: '10px',
    border: '1px solid #0078FF',
    color: '#0078FF',
    borderRadius: '56px',
    background: '#fff',
    justifyContent: 'center',
    cursor: 'pointer',
    "&:hover": {
        background: "#efefef"
      },
      "&:last-child": {
        borderRight: "solid 1px #cccccc"
      }
    
}
const textConainer={
    width: '100%',
    height: '70px',
    textAlign: 'center'
}
const title ={
    
   margin: '50 100 50 100',
   lineHeight: '33.5px',
    weight: '700',
    fontFamily: 'Mulish',
}
const description ={
    fontFamily: 'Mulish',
    color: '7D7987',
}

const imageStyle={
    width: '100%',
    bottom: '0px',
    objectFit: 'cover',
    
}


const Home = () => {
    return (
        <div>
            <div style={textConainer}>
        <h1 style={title}>EV remote charge unlocking </h1>
        <p style={description}>No more texting to neighbours, 
or waiting for the owner to come back just scan the QR code and unlock the chargerBest way to share your EV charger automaticly. </p>
       </div>
       
                <div style={btnContainer}>
        <Link to="/Scan">
                <button style={buttonStyle} type="button" >
                   Scan
                </button>
            </Link>
            <Link to="/login">
                <button style={buttonStyle} type="button">
                   Manage
                </button>
            </Link>
          </div>
          <img  style={imageStyle}src={Image} alt="image" />
        </div>
    );
};
export default Home;