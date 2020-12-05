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
  Icon,
  LogoFull,
} from "./FooterElements";

import {
  FaFacebookF as Fb,
  FaInstagram as Insta,
  FaMapMarkerAlt as Map,
  FaPhoneAlt as Call,
  FaEnvelope as Mail,
} from "react-icons/fa";

import logo_full from "../../images/logo/gauthankars_kitchen_full.svg";
import logo_flame from "../../images/logo/gauthankars_kitchen_flame.svg";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column0>
            <Logo src={logo_flame} />
            <LogoFull src={logo_full} />
          </Column0>
          <Column1>
            <Title>Contact Us</Title>
            <LinkA href="story">
              <Icon>
                <Map />
              </Icon>
              adress
            </LinkA>
            <LinkA href="#story">
              <Icon>
                <Mail />
              </Icon>
              contact@gauthankarskithen.com
            </LinkA>
            <LinkA href="#story">
              <Icon>
                <Call />
              </Icon>
              1212121212
            </LinkA>
          </Column1>
          <Column2>
            <Title>About Us</Title>
            <LinkA target="_blank" href="/menue">
              Menue
            </LinkA>
            <LinkS to="about" smooth={true} duration={600} spy={true}>
              Story
            </LinkS>
            <LinkS to="special" smooth={true} duration={600} spy={true}>
              Our Special
            </LinkS>
            <LinkS to="gallery" smooth={true} duration={600} spy={true}>
              Gallery
            </LinkS>
          </Column2>
          <Column3>
            <Title>Social Media</Title>
            <LinkA href="https://instagram.com" target="_blank">
              <Icon>
                <Insta />
              </Icon>
              Instagram
            </LinkA>
            <LinkA href="https://facebook.com" target="_blank">
              <Icon>
                <Fb />
              </Icon>
              Facebook
            </LinkA>
          </Column3>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Footer;
