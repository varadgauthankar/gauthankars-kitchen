import React from "react";
import {
  Column1,
  Column2,
  ContentRow,
  HeroContainer,
  Wrapper,
} from "../StorySection/StorySectionElements";
import imgf from "../../images/1.jpg";

const Story = () => {
  return (
    <HeroContainer>
      <Wrapper>
        <ContentRow>
          <Column1></Column1>
          <Column2></Column2>
        </ContentRow>
      </Wrapper>
    </HeroContainer>
  );
};

export default Story;
