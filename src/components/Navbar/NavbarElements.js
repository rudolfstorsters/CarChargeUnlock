import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #fff;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
export const NavLogo = styled(Link)`
margin-left: 20px;
  cursor: pointer;
  color: #333;
  font-size: 2rem;
  text-decoration: none;

`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color:black;
}
&:hover {
  color: black;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  

  
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  

  @media screen and (max-width: 768px) {
   
  }
`;



export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #fff;
  padding: 10px 22px;
  color: #0069E0;
  outline: none;
  border: 1px solid #0069E0;
  border-radius: 62px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0078FF;
    color: #fff;
  }
`;