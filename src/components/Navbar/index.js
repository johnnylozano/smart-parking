import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileMenu,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./style";
import { FaBars } from "react-icons/fa";
import logo from "src/assets/logo/Logo.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={logo} alt="" />
          </NavLogo>
          <MobileMenu>
            <FaBars />
          </MobileMenu>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="features">Features</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="pricing">Pricing</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
