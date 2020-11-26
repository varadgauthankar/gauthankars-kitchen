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
} from "./SpecialSectionElements";

import Img1 from "../../images/1.jpg";
import Img2 from "../../images/2.jpg";
import Img3 from "../../images/3.jpg";
const Special = () => {
  return (
    <HeroContainer id="special">
      <Wrapper>
        <Heading>Our Special</Heading>

        <ContentRow>
          <Column1>
            <FoodCard>
              <FoodImg src={Img1} />
            </FoodCard>
          </Column1>
          <Column2>
            <FoodCard>
              <FoodImg src={Img2} />
            </FoodCard>
          </Column2>
          <Column3>
            <FoodCard>
              <FoodImg src={Img3} />
            </FoodCard>
          </Column3>
        </ContentRow>
      </Wrapper>
    </HeroContainer>
  );
};

export default Special;
