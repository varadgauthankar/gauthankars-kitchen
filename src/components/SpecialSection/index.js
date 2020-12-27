import React from "react";

import {
  HeroContainer,
  Wrapper,
  ContentRow,
  Column1,
  Column2,
  Column3,
  Heading,
  FoodCard,
  FoodImg,
  FoodCardWrapper,
  ImageText,
} from "./SpecialSectionElements";

import Img1 from "../../images/1.jpg";
import Img2 from "../../images/2.jpg";
import Img3 from "../../images/3.jpg";
const Special = ({ toggle }) => {
  return (
    <HeroContainer id="special">
      <Wrapper>
        <Heading isItalic={true}>For your tastebuds</Heading>
        <Heading>Our Special</Heading>
        <br />

        <ContentRow>
          <Column1>
            <FoodCardWrapper>
              <FoodCard>
                <FoodImg src={Img1} />

                <ImageText>Lorem doler</ImageText>
              </FoodCard>
            </FoodCardWrapper>
          </Column1>
          <Column2>
            <FoodCardWrapper>
              <FoodCard>
                <FoodImg src={Img2} />
                <ImageText>Lorem ipsum</ImageText>
              </FoodCard>
            </FoodCardWrapper>
          </Column2>
          <Column3>
            <FoodCardWrapper>
              <FoodCard>
                <FoodImg src={Img3} />
                <ImageText>Sit lorem doler</ImageText>
              </FoodCard>
            </FoodCardWrapper>
          </Column3>
        </ContentRow>
      </Wrapper>
    </HeroContainer>
  );
};

export default Special;
