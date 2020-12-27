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
import details from "../../details";

const Locate = () => {
  const googleMapUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d808.2537987579722!2d73.82365526674882!3d15.499234954672394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc08bfddf0ddd%3A0xd6c093436aef4d4!2sChicken%20Food%20Court%20(CFC)!5e0!3m2!1sen!2sin!4v1609052269772!5m2!1sen!2sin";
  return (
    <HeroContainer id="locate">
      <Wrapper>
        <LocateContentRow>
          <Column1>
            <Heading isItalic={true}>Find us</Heading>
            <Heading>Locate Us</Heading>
            <Address>{details.address}</Address>
            <br />
            <HourTitle>Hours</HourTitle>
            <Day>Everyday: 11am to 11pm</Day>
            <BtnWrap>
              <Button to="/direction" target="_blank">
                Direction <DirectionIcon />
              </Button>
            </BtnWrap>
          </Column1>
          <Column2>
            <LocationImgWrap>
              <LocationMap src={googleMapUrl} />
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
