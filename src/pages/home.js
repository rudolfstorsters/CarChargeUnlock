
import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

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
    height: '260px',
    textAlign: 'center',
    padding: '11px 0px ',
   
    position: 'relative',
}
const title = {

    display: 'contents',
    lineHeight: '33.5px',
    fontWeight: '700',
   
    textAlign: 'left',
    padding: '11px 0px',
    fontSize: '35px',

}
const description = {

    
    color: '#7D7987',
    padding: ' 11px 8px',
    lineHeight: '32px',
    margin: "5.5px",
    fontWeight: '300',

}

const imageStyle = {

    width: '100%',
    maxWidth: '693px',
    height: '598px',
    bottom: '0px',
    //top: '0px',
    objectFit: 'fill',
    position: "absolute",
    zIndex: '-1',

}
const ResponsiveText = (props) => (
    <div className="responsive_text" className={props.className}>
        {props.children}
    </div>
)
export const ResText = styled(ResponsiveText)`
    margin: auto;   
    max-width: 332px;
    min-width: 320px;
    height: 260px;
    text-align: center;
    padding: 11px 0px;
  
    position: relative;
    align-items: center;
    justify-items: center;
    @media (min-width: 600px) {
        text-align: left;
        max-width: 500px;
    }
`;

const ResponsiveImage = (props) => (
    <div className="responsive_image" className={props.className} >
        {props.children}
    </div>
)
export const ResImg = styled(ResponsiveImage)`
aspect-ratio: 1 / 1;
background-image: url('/carImg.png');
width: 100%;
max-width: 693px;
height: auto;
margin-top: -30px;
background-repeat: no-repeat;
background-size: 100% 100%;  
object-fit: fill;
align-self: flex-end;
z-index: -1;

@media (min-width: 600px) {
    background-image: url('/carImgWindow.png');
    position: relative;
    top: -200px;
}
@media (min-width: 1400px) {
    top:0px;
}


`;

const NavBtn = (props) => (
    <button className="home_Button" className={props.className} >
        {props.children}
    </button>
)

export const NavBtnStyled = styled(NavBtn)`
    transition: box-shadow .3s;
    width: 230px;
    height: 56px;
    margin: 8px;
    border-radius: 10px;
    border: 3px solid #0078FF;
    font-size: 14px;
    Weight: 700;
    borderRadius: 56px;
    background: #fff;
    justifyContent: center;
    color: #0069E0;
    outline: none;
    border: 1,5px solid #0069E0;
    border-radius: 62px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-right: 24px;
    &:hover  {
    transition: all 0.2s ease-in-out;
    background: #0078FF;
    color: #fff;
  }
  
`;


const Home = () => {
    return (
        <div style={body}>
            <div style={wrapContainer}>
                <div style={innerWrapContainer}>
                    <div style={textConainer}>
                        <ResText><h1 style={title}>EV remote charge unlocking</h1>
                            <p style={description}>No more texting to neighbours,
                                or waiting for the owner to come back just scan the QR code and unlock the chargerBest way to share your EV charger automaticly. </p>
                        </ResText>
                    </div>


                    <div style={btnContainer}>
                        <Link to="/Scan">
                            <NavBtnStyled>
                                Scan
                            </NavBtnStyled>
                        </Link>
                        <Link to="/login">
                            <NavBtnStyled>
                                Manage
                            </NavBtnStyled>
                        </Link>
                    </div>
                </div>
               
                    <ResImg>

                    </ResImg>

                
            </div>
        </div>
    );
};
export default Home;