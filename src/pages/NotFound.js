import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Container>
      <Wrap>
        <Text>404 :(</Text>
      </Wrap>
    </Container>
  );
};

export default NotFound;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #212121;
  padding: 50px;
`;

export const Wrap = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 40px;

  text-align: center;
`;
