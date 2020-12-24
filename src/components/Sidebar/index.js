import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarLink,
  SideBtnWrap,
  SideBarMenue,
} from "./SidebarElements";

import { Button } from "../ButtonElement";

const SideBar = ({ isOpen, toggle }) => {
  // console.log(toggle);
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon></CloseIcon>
      </Icon>
      <SideBarWrapper>
        <SideBarMenue>
          <SideBarLink to="about" onClick={toggle}>
            About Us
          </SideBarLink>

          <SideBarLink to="special" onClick={toggle}>
            Our Special
          </SideBarLink>

          {/* TODO: uncomment later */}
          {/* <SideBarLink to="gallery" onClick={toggle}>
            Gallery
          </SideBarLink> */}

          <SideBarLink to="locate" onClick={toggle}>
            Locate
          </SideBarLink>

          <SideBarLink to="contact" onClick={toggle}>
            Contact
          </SideBarLink>
        </SideBarMenue>
        <SideBtnWrap>
          <Button to="/menu" onClick={toggle}>
            menu
          </Button>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
