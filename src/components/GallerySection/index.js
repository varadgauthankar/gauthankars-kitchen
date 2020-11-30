import React from "react";
import {
  HeroContainer,
  Wrapper,
  Image,
  Grid,
  PicWrap,
} from "./GalleryElements";

import Pic from "../../images/3.jpg";

const Gallery = () => {
  return (
    <HeroContainer id="gallery">
      <Wrapper>
        <Grid>
          <PicWrap col="col1">
            <Image src={Pic} />
          </PicWrap>
          <PicWrap col="col2">
            <Image src={Pic} />
          </PicWrap>
          <PicWrap col="col3">
            <Image src={Pic} />
          </PicWrap>
          <PicWrap col="col4">
            <Image src={Pic} />
          </PicWrap>
          <PicWrap col="col5">
            <Image src={Pic} />
          </PicWrap>
          <PicWrap col="col6">
            <Image src={Pic} />
          </PicWrap>
          <PicWrap col="col7">
            <Image src={Pic} />
          </PicWrap>
          <PicWrap col="col8">
            <Image src={Pic} />
          </PicWrap>
        </Grid>
      </Wrapper>
    </HeroContainer>
  );
};

export default Gallery;
