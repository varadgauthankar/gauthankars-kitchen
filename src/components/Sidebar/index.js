import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
  SideBarMenue,
} from "./SidebarElements";

const SideBar = ({ isOpen, toggle }) => {
  // console.log(toggle);
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon></CloseIcon>
      </Icon>
      <SideBarWrapper>
        <SideBarMenue>
          <SideBarLink to="home" onClick={toggle}>
            Home
          </SideBarLink>
          <SideBarLink to="contact" onClick={toggle}>
            Contact
          </SideBarLink>
          <SideBarLink to="gallery" onClick={toggle}>
            Gallery
          </SideBarLink>
          <SideBarLink to="locate" onClick={toggle}>
            {" "}
            Locate
          </SideBarLink>
        </SideBarMenue>
        <SideBtnWrap>
          <SideBarRoute to="/menue" onClick={toggle}>
            Menue
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
