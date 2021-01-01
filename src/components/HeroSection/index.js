import React, { useState } from "react";
import bg from "../../images/bg.jpg";
import logo from "../../images/logo/gauthankars_kitchen_flame.svg";
import { Button } from "../ButtonElement";
import Spacer from "../Spacer";
import styled from "styled-components";
import {
  BgVideo,
  ContentWrap,
  HeadLine,
  HeroBg,
  HeroContainer,
  LogoImage,
} from "./HeroSectionElements";

import { FaChevronRight, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <BgVideo src={bg} />
      </HeroBg>

      <ContentWrap>
        <LogoImage src={logo} alt="logo" />
        <HeadLine>Welcome To Gauthankar's Kitchen</HeadLine>
        {/* <TagLine>Food For The Soul</TagLine> */}
        <Spacer height={12} />
        <Button to="/menu" onMouseEnter={onHover} onMouseLeave={onHover}>
          View Menu {hover ? <ArrowRightHover /> : <ArrowRight />}
        </Button>
      </ContentWrap>
    </HeroContainer>
  );
};

export const ArrowRight = styled(FaChevronRight)`
  margin-left: 8px;
  margin-bottom: 4px;
  vertical-align: middle;
  font-size: 24px;
`;
export const ArrowRightHover = styled(FaArrowRight)`
  margin-left: 8px;
  margin-bottom: 4px;
  vertical-align: middle;
  font-size: 24px;
`;

export default Hero;
