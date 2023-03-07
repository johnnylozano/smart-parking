import React, { useState, useContext, useEffect } from "react";
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
  NavBtnSignOut,
  SidebarSignOut,
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
import { AuthContext } from "src/context/AuthProvider";
// AWS Auth
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "src/aws-exports";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsconfig);

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
            {/* {!Auth ? (
              <Authenticator>
                {({ signOut }) => (
                  <SidebarSignOut onClick={signOut}>Sign Out</SidebarSignOut>
                )}
              </Authenticator>
            ) : (
              <SidebarRoute to="/signin">Sign In</SidebarRoute>
            )} */}
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

  const { isAuthenticated, handleLogout } = useContext(AuthContext);

  useEffect(() => {}, [isAuthenticated]);

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
            {isAuthenticated ? (
              <NavBtnSignOut onClick={handleLogout}>Sign Out</NavBtnSignOut>
            ) : (
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
