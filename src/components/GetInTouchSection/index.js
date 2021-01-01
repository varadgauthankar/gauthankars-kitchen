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

import details from "../../utils/details";

const GetInTouch = () => {
  return (
    <HeroContainer id="contact">
      <Wrapper>
        <Row>
          <Column1>
            <ContentWrap>
              <Title isItalic={true}>Get In Touch</Title>
              <Title>Contact Us</Title>

              <Text
                href="mailto:contact@gauthankarskitchen.com"
                target="_blank"
              >
                <MailIcon />
                {details.email}
              </Text>

              <Text href="tel:1234657890" target="_blank">
                <CallIcon />
                {details.phoneNo}
              </Text>

              <Text href="/direction" target="_blank">
                <MapIcon />
                {details.shortAddress}
              </Text>
            </ContentWrap>

            <SocialWrap>
              <SocialTitle>Connect with us</SocialTitle>
              <SocialIcon
                href={details.instaLink}
                target="_blank"
                rel="noopener"
              >
                <InstaIcon />
              </SocialIcon>
              <SocialIcon
                href={details.facebookLink}
                target="_blank"
                rel="noopener"
              >
                <FbIcon />
              </SocialIcon>
            </SocialWrap>
          </Column1>
          <Column2>
            <FormContainer>
              <FormTitle>Send us a message</FormTitle>
              <form
                name="contact"
                method="POST"
                action="/form-submitted"
                data-netlify="true"
              >
                <label>
                  <input type="hidden" name="form-name" value="contact" />
                </label>
                <label>
                  {""}
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </label>
                <label>
                  {" "}
                  <Input required type="text" name="name" placeholder="Name" />
                </label>

                <label>
                  {" "}
                  <TextArea
                    required
                    name="message"
                    placeholder="Message"
                  ></TextArea>
                </label>

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
