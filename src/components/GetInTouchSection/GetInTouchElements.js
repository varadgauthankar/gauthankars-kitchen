import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 1;
`;

export const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  text-align: center;
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 60px;
  }
`;

export const Row = styled.div`
  grid-template-areas: "col1 col2";
  display: grid;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const ContentWrap = styled.div`
  text-align: left;
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  color: #fff;
  margin: 20px 0;
`;

export const Icon = styled.i`
  color: #fff;
  margin-right: 8px;
`;

export const FormContainer = styled.div`
  margin-left: auto;
  border-radius: 12px;
  box-shadow: 2px 2px 4px #212121;
  background: #313131;
  padding: 8px;
  height: 500px;
  width: 400px;
`;

export const Form = styled.form``;
