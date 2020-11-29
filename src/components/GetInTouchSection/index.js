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
  Form,
  Input,
  TextArea,
  Button,
  SocialWrap,
  SocialIcon,
  SocialTitle,
  FormTitle,
} from "./GetInTouchElements";

import {
  FaMapMarkerAlt as Map,
  FaPhoneAlt as Call,
  FaEnvelope as Mail,
  FaInstagram as Insta,
  FaFacebookF as Fb,
} from "react-icons/fa";

const GetInTouch = () => {
  return (
    <HeroContainer id="contact">
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

            <SocialWrap>
              <SocialTitle>Connect with us</SocialTitle>
              <SocialIcon>
                <Insta color="#E1306C" />
              </SocialIcon>
              <SocialIcon>
                <Fb color="4267B2" />
              </SocialIcon>
            </SocialWrap>
          </Column1>
          <Column2>
            <FormContainer>
              <FormTitle>Contact Us</FormTitle>
              <Form name="contact" action="/contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <Input required type="email" name="email" placeholder="Email" />
                <Input required type="text" name="name" placeholder="Name" />
                <TextArea
                  required
                  name="message"
                  placeholder="Message"
                ></TextArea>
                <Button type="submit">Send</Button>
              </Form>
            </FormContainer>
          </Column2>
        </Row>
      </Wrapper>
    </HeroContainer>
  );
};

export default GetInTouch;
