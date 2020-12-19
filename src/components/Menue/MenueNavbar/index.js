import React from "react";
import {
  Nav,
  NavBackIcon,
  NavbarContainer,
  NavLogo,
} from "../MenueNavbar/MenueNavbarElements";

import { IoIosArrowBack } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <Nav>
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
