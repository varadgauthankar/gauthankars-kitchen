import React from "react";
import Video from "../../videos/video.mp4";
import logo from "../../images/logo.png";
import { Button } from "../ButtonElement";
import Spacer from "../Spacer";
import {
  BgVideo,
  ContentWrap,
  HeadLine,
  HeroBg,
  HeroContainer,
  LogoVideo,
  TagLine,
} from "./HeroSectionElements";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <BgVideo autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>

      <ContentWrap>
        <LogoVideo src={logo} />
        <HeadLine>Welcome To Gauthankar's Kitchen</HeadLine>
        <TagLine>Food For The Soul</TagLine>
        <Spacer height={12} />
        <Button to="/menue">View Menue</Button>
      </ContentWrap>
    </HeroContainer>
  );
};

export default Hero;
