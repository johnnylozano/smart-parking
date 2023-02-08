import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
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
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
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

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={logo} alt="Logo" />
          </NavLogo>
          <MobileMenu onClick={toggleMenu}>
            <FaBars />
          </MobileMenu>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="features"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Features
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="pricing"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Pricing
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
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
