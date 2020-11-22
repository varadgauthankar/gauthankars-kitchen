import React from "react";
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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenue>
            <NavItems>
              <NavLinks to="home">Home</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="gallery">Gallery</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="locate">Locate</NavLinks>
            </NavItems>
          </NavMenue>
          <NavBtn>
            <NavBtnLink to="/menue">Menue</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );

  //   return (
  //     <>
  //       <Nav>
  //         <NavbarContainer>
  //           <NavLogo>Logo</NavLogo>
  //         </NavbarContainer>
  //       </Nav>
  //     </>
  //   );
};

export default Navbar;
