import React, { useState } from "react";
import Video from "../../videos/video.mp4";
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
  TagLine,
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
        <BgVideo autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>

      <ContentWrap>
        <LogoImage src={logo} />
        <HeadLine>Welcome To Gauthankar's Kitchen</HeadLine>
        {/* <TagLine>Food For The Soul</TagLine> */}
        <Spacer height={12} />
        <Button to="/menue" onMouseEnter={onHover} onMouseLeave={onHover}>
          View Menue {hover ? <ArrowRightHover /> : <ArrowRight />}
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
