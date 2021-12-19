import React from "react";
import { NavLink as Link } from "react-router-dom";
import Home from "../../pages/home";
import Logo from '../images/logo_EV_1 1.png';

import {
  Nav,
  NavLogo,
    
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";




const Navbar = () => {
  return (
      <>
         <Nav>
          <NavLogo to="/home">
          <img src={Logo} alt="Logo" />
          </NavLogo>
          <Bars />

          <NavMenu>
              
              <NavBtn>
                  <NavBtnLink to="/login">LOGIN</NavBtnLink>                
              </NavBtn>
          </NavMenu> 
         </Nav> 
      </>
  );
};
export default Navbar;