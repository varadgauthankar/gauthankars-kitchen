import React from "react";
import {
  HeroContainer,
  Wrapper,
  Image,
  Grid,
  PicWrap,
  Heading,
} from "./GalleryElements";

import pic1 from "../../images/gallery/1.jpg";
import pic2 from "../../images/gallery/2.jpg";
import pic3 from "../../images/gallery/3.jpg";
import pic4 from "../../images/gallery/4.jpg";
import pic5 from "../../images/gallery/5.jpg";
import pic6 from "../../images/gallery/6.jpg";

const Gallery = ({ isDark }) => {
  return (
    <HeroContainer id="gallery" isDark={isDark}>
      <Wrapper>
        <Heading isDark={isDark} isItalic={true}>
          Pictures
        </Heading>
        <Heading isDark={isDark} isItalic={false}>
          Gallery
        </Heading>
        <br />
        <Grid>
          <PicWrap>
            <Image src={pic1} />
          </PicWrap>
          <PicWrap>
            <Image src={pic2} />
          </PicWrap>
          <PicWrap>
            <Image src={pic3} />
          </PicWrap>
          <PicWrap>
            <Image src={pic4} />
          </PicWrap>
          <PicWrap>
            <Image src={pic5} />
          </PicWrap>
          <PicWrap>
            <Image src={pic6} />
          </PicWrap>
        </Grid>
      </Wrapper>
    </HeroContainer>
  );
};

export default Gallery;
