import React, { useState } from "react";
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
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./style";
import { FaBars } from "react-icons/fa";
import logo from "src/assets/logo/Logo.svg";

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggleMenu}>
        <Icon onClick={toggleMenu}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggleMenu}>
              About
            </SidebarLink>
            <SidebarLink to="features" onClick={toggleMenu}>
              Features
            </SidebarLink>
            <SidebarLink to="pricing" onClick={toggleMenu}>
              Pricing
            </SidebarLink>
            <SidebarLink to="services" onClick={toggleMenu}>
              Services
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/">Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={logo} alt="" />
          </NavLogo>
          <MobileMenu onClick={toggleMenu}>
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
