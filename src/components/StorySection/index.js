import React from "react";
import {
  Column1,
  Column2,
  ContentRow,
  HeroContainer,
  Wrapper,
  ImageWrapper,
  Image,
  Heading,
  HeadingMobile,
  StoryText,
  TextWrapper,
  TextWrapperMobile,
} from "./StorySectionElements";
import imgf from "../../images/1.jpg";
import details from "../../utils/details";

const Story = () => {
  return (
    <HeroContainer id="about">
      <Wrapper>
        <TextWrapperMobile>
          <HeadingMobile isItalic={true}>Discover</HeadingMobile>
          <HeadingMobile isItalic={false}>Our Story</HeadingMobile>
          <br />
        </TextWrapperMobile>

        <ContentRow>
          <Column1>
            <ImageWrapper>
              <Image src={imgf} alt="story" />
            </ImageWrapper>
          </Column1>
          <Column2>
            <TextWrapper>
              <Heading isItalic={true}>Discover</Heading>
              <Heading isItalic={false}>Our Story</Heading>
              <br />
              <StoryText>{details.about.line1}</StoryText>
            </TextWrapper>
          </Column2>
        </ContentRow>
      </Wrapper>
    </HeroContainer>
  );
};

export default Story;
