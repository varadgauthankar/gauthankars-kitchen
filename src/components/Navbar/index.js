import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItems,
  NavLinks,
  NavMenue,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">Logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenue>
            <NavItems>
              <NavLinks
                to="contact"
                smooth={true}
                duration={600}
                spy={true}
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="gallery"
                smooth={true}
                duration={600}
                spy={true}
                offset={-80}
              >
                Gallery
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="locate"
                smooth={true}
                duration={600}
                spy={true}
                offset={-80}
              >
                Locate
              </NavLinks>
            </NavItems>
          </NavMenue>
          <NavBtn>
            <NavBtnLink to="/menue">Menue</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
