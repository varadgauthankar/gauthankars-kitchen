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
  NavLogoImg,
} from "./NavbarElements";

import logo_flame from "../../images/logo/gauthankars_kitchen_flame.svg";

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
          <NavLogo
            to="home"
            smooth={true}
            duration={600}
            spy={true}
            offset={-80}
          >
            <NavLogoImg src={logo_flame} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenue>
            <NavItems>
              <NavLinks
                to="about"
                smooth={true}
                duration={600}
                spy={true}
                offset={-80}
              >
                About Us
              </NavLinks>
            </NavItems>

            <NavItems>
              <NavLinks
                to="special"
                smooth={true}
                duration={600}
                spy={true}
                offset={-80}
              >
                Our Special
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

            {/* <NavItems>
              <NavLinks
                to="gallery"
                smooth={true}
                duration={600}
                spy={true}
                offset={-80}
              >
                Gallery
              </NavLinks>
            </NavItems> */}
          </NavMenue>
          <NavBtn>
            <NavBtnLink to="/menu">Menu</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
