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
  ImageTextTag,
  ImageTextWrapper,
} from "./SpecialSectionElements";

import Img1 from "../../images/special/1.jpg";
import Img2 from "../../images/special/2.jpg";
import Img3 from "../../images/special/3.jpg";
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
                <FoodImg src={Img1} alt="special" />
                <ImageTextWrapper>
                  <ImageText>Fish Thali</ImageText>
                  <ImageTextTag>The classic goan fish Thali</ImageTextTag>
                </ImageTextWrapper>
              </FoodCard>
            </FoodCardWrapper>
          </Column1>
          <Column2>
            <FoodCardWrapper>
              <FoodCard>
                <FoodImg src={Img2} alt="special" />
                <ImageTextWrapper>
                  <ImageText>Chiceken Sizler</ImageText>
                  <ImageTextTag>The classic goan fish Thali</ImageTextTag>
                </ImageTextWrapper>
              </FoodCard>
            </FoodCardWrapper>
          </Column2>
          <Column3>
            <FoodCardWrapper>
              <FoodCard>
                <FoodImg src={Img3} alt="special" />
                <ImageTextWrapper>
                  <ImageText>TCT's Special Burger</ImageText>
                  <ImageTextTag>The classic goan fish Thali</ImageTextTag>
                </ImageTextWrapper>
              </FoodCard>
            </FoodCardWrapper>
          </Column3>
        </ContentRow>
      </Wrapper>
    </HeroContainer>
  );
};

export default Special;
