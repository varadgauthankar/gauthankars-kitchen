import React from "react";
import {
  Nav,
  NavBackIcon,
  NavbarContainer,
  NavLogo,
  NavLogoImg,
} from "../MenueNavbar/MenueNavbarElements";

import logo_flame from "../../../images/logo/gauthankars_kitchen_flame.svg";

import { IoIosArrowBack } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavBackIcon to="/">
            <IoIosArrowBack size={30} />
          </NavBackIcon>
          <NavLogo to="/">
            <NavLogoImg src={logo_flame} />
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
