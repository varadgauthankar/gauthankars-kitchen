import React from "react";
import {
  HeroContainer,
  Wrapper,
  Image,
  Grid,
  PicWrap,
  Heading,
} from "./GalleryElements";

import Pic from "../../images/3.jpg";

const Gallery = () => {
  return (
    <HeroContainer id="gallery">
      <Wrapper>
        <Heading>Gallery</Heading>

        <Grid>
          <PicWrap>
            <Image src={Pic} />
          </PicWrap>
          <PicWrap>
            <Image src={Pic} />
          </PicWrap>
          <PicWrap>
            <Image src={Pic} />
          </PicWrap>
          <PicWrap>
            <Image src={Pic} />
          </PicWrap>
          <PicWrap>
            <Image src={Pic} />
          </PicWrap>
          <PicWrap>
            <Image src={Pic} />
          </PicWrap>
        </Grid>
      </Wrapper>
    </HeroContainer>
  );
};

export default Gallery;
