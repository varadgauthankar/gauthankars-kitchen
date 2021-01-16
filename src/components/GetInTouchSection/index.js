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

const GetInTouch = ({ isDark }) => {
  return (
    <HeroContainer id="contact" isDark={isDark}>
      <Wrapper>
        <Row>
          <Column1>
            <ContentWrap>
              <Title isItalic={true} isDark={isDark}>
                Get In Touch
              </Title>
              <Title isDark={isDark}>Contact Us</Title>

              <Text
                isDark={isDark}
                href={"mailto:" + details.email}
                target="_blank"
              >
                <MailIcon />
                {details.email}
              </Text>

              <Text
                isDark={isDark}
                href={"tel:" + details.phoneNo}
                target="_blank"
              >
                <CallIcon />
                {details.phoneNo}
              </Text>

              <Text isDark={isDark} href="/direction" target="_blank">
                <MapIcon />
                {details.shortAddress}
              </Text>
            </ContentWrap>

            <SocialWrap>
              <SocialTitle isDark={isDark}>Connect with us</SocialTitle>
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
              <FormTitle isDark={isDark}>Send us a message</FormTitle>
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
