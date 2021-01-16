import React from "react";
import {
  Address,
  Column1,
  Column2,
  Heading,
  HeroContainer,
  LocateContentRow,
  Wrapper,
  LocationMap,
  BtnWrap,
  BtnWrap2,
  DirectionIcon,
  LocationImgWrap,
  Button,
  HourTitle,
  Day,
} from "../LocateSection/LocateSectionElements";
import details from "../../utils/details";

const Locate = ({ isDark }) => {
  return (
    <HeroContainer id="locate" isDark={isDark}>
      <Wrapper>
        <LocateContentRow>
          <Column1>
            <Heading isDark={isDark} isItalic={true}>
              Find us
            </Heading>
            <Heading isDark={isDark}>Locate Us</Heading>
            <Address isDark={isDark}>{details.address}</Address>
            <br />
            <HourTitle isDark={isDark}>Hours</HourTitle>
            <Day isDark={isDark}>Everyday: 11am to 11pm</Day>
            <BtnWrap>
              <Button to="/direction" target="_blank">
                Direction <DirectionIcon />
              </Button>
            </BtnWrap>
          </Column1>
          <Column2>
            <LocationImgWrap>
              <LocationMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.9368181000686!2d73.82398842729745!3d15.499388685415934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1e1e0c3ffa9%3A0xf332b2f7b529c0ad!2sGauthankar&#39;s%20Kitchen!5e0!3m2!1sen!2sin!4v1609776856408!5m2!1sen!2sin"
                title="map"
              />
            </LocationImgWrap>
          </Column2>
        </LocateContentRow>
        <BtnWrap2>
          <Button to="/direction" target="_blank">
            Direction <DirectionIcon />
          </Button>
        </BtnWrap2>
      </Wrapper>
    </HeroContainer>
  );
};

export default Locate;
