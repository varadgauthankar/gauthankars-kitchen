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
} from "../LocateSection/LocateSectionElements";
import Location from "../../images/map.svg";

const Locate = () => {
  return (
    <HeroContainer id="locate">
      <Wrapper>
        <LocateContentRow>
          <Column1>
            <Heading>Locate us</Heading>
            <Address>Adress here lorem ipsum dolor sit 1234</Address>
            <BtnWrap>
              <Button to="/direction" target="_blank">
                Direction <DirectionIcon />
              </Button>
            </BtnWrap>
          </Column1>
          <Column2>
            <a href="/direction" target="_blank">
              <LocationImgWrap>
                <LocationMap src={Location} />
              </LocationImgWrap>
            </a>
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
