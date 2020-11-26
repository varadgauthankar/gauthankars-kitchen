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
          <SideBarLink to="contact" onClick={toggle}>
            Contact
          </SideBarLink>
          <SideBarLink to="gallery" onClick={toggle}>
            Gallery
          </SideBarLink>
          <SideBarLink to="locate" onClick={toggle}>
            Locate
          </SideBarLink>
        </SideBarMenue>
        <SideBtnWrap>
          <Button to="/menue" onClick={toggle}>
            Menue
          </Button>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
