import React, { useState, useEffect } from "react";
import {
  Nav,
  NavBackIcon,
  NavbarContainer,
  NavLogo,
} from "../MenueNavbar/MenueNavbarElements";

import { IoIosArrowBack } from "react-icons/io";

const Navbar = () => {
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
          <NavBackIcon to="/">
            <IoIosArrowBack />
          </NavBackIcon>
          <NavLogo to="/">Logo</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
