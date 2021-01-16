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
  HighlightedText,
} from "./StorySectionElements";

import img_story from "../../images/story_pic.jpg";
import details from "../../utils/details";
import colors from "../../utils/colors";

const Story = ({ isDark }) => {
  return (
    <HeroContainer id="about" isDark={isDark}>
      <Wrapper>
        <TextWrapperMobile>
          <HeadingMobile isItalic={true} isDark={isDark}>
            Discover
          </HeadingMobile>
          <HeadingMobile isItalic={false} isDark={isDark}>
            Our Story
          </HeadingMobile>
          <br />
        </TextWrapperMobile>

        <ContentRow>
          <Column1>
            <ImageWrapper>
              <Image src={img_story} alt="story" />
            </ImageWrapper>
          </Column1>
          <Column2>
            <TextWrapper>
              <Heading isItalic={true} isDark>
                Discover
              </Heading>
              <Heading isItalic={false} isDark={isDark}>
                Our Story
              </Heading>
              <br />
              <StoryText isDark={isDark}>
                {details.about.line1 + details.about.line2}
                <a
                  href={details.bicholimLocation}
                  target="__blank"
                  style={{ textDecoration: "none", color: colors.black }}
                >
                  <HighlightedText>
                    {details.about.bicholimName}
                  </HighlightedText>
                </a>

                {details.about.line3}
              </StoryText>
            </TextWrapper>
          </Column2>
        </ContentRow>
      </Wrapper>
    </HeroContainer>
  );
};

export default Story;
