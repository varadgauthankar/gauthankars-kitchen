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
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 350px) {
    margin-bottom: 15px;
  }
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }

  @media screen and (max-width: 350px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  color: #fff;
  margin: 20px 0;
  @media screen and (max-width: 768px) {
    margin: 8px 0;
  }
  @media screen and (max-width: 350px) {
    font-size: 14px;
    margin: 10px 0;
  }
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
  padding: 18px 22px;
  display: block;
  width: 450px;
  
  /* display: none; */

  @media screen and (max-width: 768px) {
    margin: 25px auto 10px auto;
    width: 100%;
  }

  @media screen and (max-width: 350px) {
    padding: 12px 12px;
    margin: 10px auto 10px auto;
  }
`;

export const FormTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;

  @media screen and (max-width: 768px) {
    margin-bottom: 8px;
  }

  @media screen and (max-width: 350px) {
    font-size: 22px;
    margin-bottom: 6px;
  }
`;

export const Form = styled.div``;

export const Input = styled.input`
  border-radius: 8px;
  width: 100%;
  border: 2px solid #f64b4b;
  background: none;
  padding: 6px 12px;
  color: #fff;
  margin-bottom: 16px;
  outline: none;

  @media screen and (max-width: 350px) {
    height: 30px;
    padding: 3px 6px;
    margin-bottom: 10px;
  }
`;

export const TextArea = styled.textarea`
  border-radius: 8px;
  width: 100%;
  height: 10vh;
  border: 2px solid #f64b4b;
  background: none;
  padding: 6px 12px;
  color: #fff;
  margin-bottom: 10px;
  resize: none;
  outline: none;

  @media screen and (max-width: 350px) {
    height: 50px;
    padding: 3px 6px;
    margin-bottom: 4px;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin: 0;
  padding: 10px 12px;
  border-radius: 8px;
  background: #fb4b4b;
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;
  font-size: 16px;
  transition: all 0.2 ease-in-out;

  &:hover {
    color: #000;
    background: #fff;
    box-shadow: 2px 2px 8px rgba(246, 75, 75, 0.3);
    transition: all 0.2 ease-in-out;
  }
`;

export const SocialWrap = styled.div`
  text-align: left;
`;

export const SocialTitle = styled.p`
  color: #fff;
  margin-bottom: 4px;
`;

export const SocialIcon = styled.i`
  color: #fff;
  margin: 20px 20px 90px 0;

  font-size: 22px;
`;
