import React from "react";
import {
  Column1,
  Column2,
  ContentWrap,
  HeroContainer,
  Icon,
  Row,
  Title,
  Wrapper,
  Text,
  FormContainer,
} from "./GetInTouchElements";

import {
  FaMapMarkerAlt as Map,
  FaPhoneAlt as Call,
  FaEnvelope as Mail,
} from "react-icons/fa";

const GetInTouch = () => {
  return (
    <HeroContainer>
      <Wrapper>
        <Row>
          <Column1>
            <ContentWrap>
              <Title>Get In Touch</Title>
              <Text>
                <Icon>
                  <Mail />
                </Icon>
                contact@gauthankarskitchen.com
              </Text>

              <Text>
                <Icon>
                  <Call />
                </Icon>
                +91 1212121212
              </Text>

              <Text>
                <Icon>
                  <Map />
                </Icon>
                adress lorem ipsum dolo sit
              </Text>
            </ContentWrap>
          </Column1>
          <Column2>
            <FormContainer>
              <form name="contact" action="/contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="your email"
                />
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="your name"
                />
                <textarea
                  required
                  name="message"
                  placeholder="message"
                  cols="30"
                  rows="10"
                ></textarea>
                <button type="submit">Send</button>
              </form>
            </FormContainer>
          </Column2>
        </Row>
      </Wrapper>
    </HeroContainer>
  );
};

export default GetInTouch;
