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
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  function handleFormSubmit(event) {
    event.preventDefault();
    const data = [...event.target.elements]
      .filter((element) => Boolean(element.name))
      .reduce((json, element) => {
        json[element.name] = element.value;
        return json;
      }, {});
    fetch(event.target.action, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  }
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
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleFormSubmit}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="form-control"
                  />
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="form-control"
                  />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="message"
                    className="form-control"
                  ></textarea>
                  <div data-netlify-recaptcha="true"></div>
                </div>
                <button type="submit" className="submit-btn btn">
                  send me your message
                </button>
              </form>
            </FormContainer>
          </Column2>
        </Row>
      </Wrapper>
    </HeroContainer>
  );
};

export default GetInTouch;
