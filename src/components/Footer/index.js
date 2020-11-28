import React from "react";
import {
  Container,
  Column,
  Link,
  Title,
  Wrapper,
  Row,
  Logo,
} from "./FooterElements";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column0>
            <Logo>Logo</Logo>
          </Column0>
          <Column1>
            <Title>Contact Us</Title>
            <Link href="#story">adress</Link>

            <Link href="#story">contact@gauthankarskithen.com</Link>
            <Link href="#story">1212121212</Link>
          </Column1>
          <Column2>
            <Title>About Us</Title>
            <Link href="#story">Story</Link>
            <Link href="#story">Story</Link>
            <Link href="#story">Story</Link>
          </Column2>
          <Column3>
            <Title>Social Media</Title>
            <Link href="#story">Instagram</Link>
            <Link href="#story">Facebook</Link>
            <Link href="#story">Story</Link>
          </Column3>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Footer;
