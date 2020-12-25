import React from "react";
import {
  Container,
  Column0,
  Column1,
  Column2,
  Column3,
  LinkS,
  LinkA,
  Title,
  Wrapper,
  Row,
  Logo,
  LogoFull,
  MapIcon,
  MailIcon,
  CallIcon,
  InstaIcon,
  FbIcon,
} from "./FooterElements";

import logo_full from "../../images/logo/gauthankars_kitchen_full.svg";
import logo_flame from "../../images/logo/gauthankars_kitchen_flame.svg";

const Footer = ({ isHome }) => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column0>
            <LinkA href="/">
              <Logo src={logo_flame} />
              <LogoFull src={logo_full} />
            </LinkA>
          </Column0>
          <Column1>
            <Title>Contact Us</Title>

            <LinkA href="mailto:gauthankarskitchen@gmail.com" target="_blank">
              <MailIcon />
              gauthankarskitchen@gmail.com
            </LinkA>

            <LinkA href="/direction" target="_blank">
              <MapIcon />
              adress
            </LinkA>

            <LinkA href="tel:919191991" target="_blank">
              <CallIcon />
              1212121212
            </LinkA>
          </Column1>

          <Column2>
            <Title>About Us</Title>
            <LinkA target="_blank" href="/menu">
              Menu
            </LinkA>
            {isHome ? (
              <>
                <LinkS to="about" smooth={true} duration={600} spy={true}>
                  Story
                </LinkS>
                <LinkS to="special" smooth={true} duration={600} spy={true}>
                  Our Special
                </LinkS>
              </>
            ) : (
              <>
                <LinkA href="https://gauthankarskitchen.com/#about">
                  Story
                </LinkA>
                <LinkA href="https://gauthankarskitchen.com/#special">
                  Our Special
                </LinkA>
              </>
            )}

            {/* TODO: uncomment when gallery will be added */}
            {/* 
            <LinkS to="gallery" smooth={true} duration={600} spy={true}>
              Gallery
            </LinkS> */}
          </Column2>

          <Column3>
            <Title>Social Media</Title>

            <LinkA href="https://instagram.com" target="_blank">
              <InstaIcon />
              Instagram
            </LinkA>

            <LinkA href="https://facebook.com" target="_blank">
              <FbIcon />
              Facebook
            </LinkA>
          </Column3>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Footer;
