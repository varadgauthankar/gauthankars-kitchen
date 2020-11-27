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
} from "../StorySection/StorySectionElements";
import imgf from "../../images/1.jpg";

const Story = () => {
  return (
    <HeroContainer id="story">
      <Wrapper>
        <HeadingMobile>Our Story</HeadingMobile>
        <ContentRow>
          <Column1>
            <ImageWrapper>
              <Image src={imgf} />
            </ImageWrapper>
          </Column1>
          <Column2>
            <TextWrapper>
              <Heading>Our Story</Heading>
              <StoryText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam consequuntur temporibus repellat eius sequi, maiores
                nulla consequatur molestiae corporis ipsum, vitae deleniti iure
                possimus saepe autem doloremque necessitatibus! Quisquam,
                voluptate?
              </StoryText>
            </TextWrapper>
          </Column2>
        </ContentRow>
      </Wrapper>
    </HeroContainer>
  );
};

export default Story;
