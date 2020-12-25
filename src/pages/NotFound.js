import React from "react";
import styled from "styled-components";

const NotFound = () => {
  const back = "<";
  return (
    <Wrapper>
      <TextWrapper>
        <Title>404</Title>
        <Subtitle>This is not the web page you're looking for</Subtitle>
        <Button href="/"> {back} Back to home</Button>
      </TextWrapper>
    </Wrapper>
  );
};

export default NotFound;

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  background-color: #221f1e;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2b2727;
  padding: 18px 22px;
  border-radius: 8px;
  box-shadow: 6px 6px 12px rgba(255, 31, 31, 0.1);
`;

export const Title = styled.p`
  font-size: 28px;
  color: #ffedc4;
  font-weight: 800;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  font-size: 22px;
  color: #fff;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.a`
  color: #ff2929;
  text-decoration: none;

  :hover {
    color: #ff2929;
    text-decoration: underline;
  }
`;
