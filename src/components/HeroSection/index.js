import React from "react";
import Video from "../../videos/video.mp4";
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
    <HeroContainer>
      <HeroBg>
        <BgVideo autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>

      <ContentWrap>
        <LogoVideo>G</LogoVideo>
        <HeadLine>Welcome To Gauthankar's Kitchen</HeadLine>
        <TagLine>Food For The Soul</TagLine>
        <Spacer height={12} />
        <Button primary="true" to="/menue">
          View Menue
        </Button>
      </ContentWrap>
    </HeroContainer>
  );
};

export default Hero;
