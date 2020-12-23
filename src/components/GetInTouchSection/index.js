import React from "react";
import {
  Column1,
  Column2,
  ContentWrap,
  HeroContainer,
  Row,
  Title,
  Wrapper,
  Text,
  FormContainer,
  Input,
  TextArea,
  Button,
  SocialWrap,
  SocialIcon,
  SocialTitle,
  FormTitle,
  MailIcon,
  CallIcon,
  MapIcon,
  InstaIcon,
  FbIcon,
} from "./GetInTouchElements";

const GetInTouch = () => {
  return (
    <HeroContainer id="contact">
      <Wrapper>
        <Row>
          <Column1>
            <ContentWrap>
              <Title>Get In Touch</Title>

              <Text
                href="mailto:contact@gauthankarskitchen.com"
                target="_blank"
              >
                <MailIcon />
                contact@gauthankarskitchen.com
              </Text>

              <Text href="tel:1234657890" target="_blank">
                <CallIcon />
                +91 1212121212
              </Text>

              <Text href="/direction" target="_blank">
                <MapIcon />
                adress lorem ipsum dolo sit
              </Text>
            </ContentWrap>

            <SocialWrap>
              <SocialTitle>Connect with us</SocialTitle>
              <SocialIcon href="https://insta.com" target="_blank">
                <InstaIcon />
              </SocialIcon>
              <SocialIcon href="https://fb.com" target="_blank">
                <FbIcon />
              </SocialIcon>
            </SocialWrap>
          </Column1>
          <Column2>
            <FormContainer>
              <FormTitle>Contact Us</FormTitle>
              <form
                name="contact"
                method="POST"
                action="/form-submitted"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <Input required type="email" name="email" placeholder="Email" />
                <Input required type="text" name="name" placeholder="Name" />
                <TextArea
                  required
                  name="message"
                  placeholder="Message"
                ></TextArea>
                <Button type="submit">Send</Button>
              </form>
            </FormContainer>
          </Column2>
        </Row>
      </Wrapper>
    </HeroContainer>
  );
};

export default GetInTouch;
