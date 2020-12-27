import styled from "styled-components";
import colors from "../../utils/colors";

import {
  FaMapMarkerAlt as Map,
  FaPhoneAlt as Call,
  FaEnvelope as Mail,
  FaInstagram as Insta,
  FaFacebookF as Fb,
} from "react-icons/fa";

export const HeroContainer = styled.div`
  background: ${colors.brown};
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
  text-align: left;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const ContentWrap = styled.div`
  text-align: left;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 350px) {
    margin-bottom: 15px;
  }
`;

export const Title = styled.p`
  color: ${({ isItalic }) => (isItalic ? colors.golden : colors.white)};
  font-size: ${({ isItalic }) => (isItalic ? "60px" : "60px")};
  font-family: ${({ isItalic }) => (isItalic ? "'Kristi', cursive" : "Lato")};
  line-height: 1;
  margin-bottom: ${({ isItalic }) => (isItalic ? "0" : "20px")};
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 350px) {
  }
`;

export const Text = styled.a`
  color: ${colors.white};
  margin: 10px 0;
  @media screen and (max-width: 768px) {
    margin: 8px 0;
  }
  @media screen and (max-width: 350px) {
    font-size: 14px;
    margin: 10px 0;
  }
`;

export const MailIcon = styled(Mail)`
  color: ${colors.white};
  margin-right: 10px;
`;

export const CallIcon = styled(Call)`
  color: ${colors.white};
  margin-right: 10px;
`;

export const MapIcon = styled(Map)`
  color: ${colors.white};
  margin-right: 10px;
`;

export const InstaIcon = styled(Insta)`
  color: ${colors.instagram};
  margin-right: 10px;
`;

export const FbIcon = styled(Fb)`
  color: ${colors.facebook};
  margin-right: 10px;
`;

export const FormContainer = styled.div`
  margin-left: auto;
  border-radius: 12px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.2);
  background: ${colors.brownLight};
  padding: 18px 22px;
  display: block;
  width: 450px;

  @media screen and (max-width: 768px) {
    margin: 25px auto 10px auto;
    width: 100%;
  }

  @media screen and (max-width: 350px) {
    padding: 12px 12px;
    margin: 10px auto 10px auto;
  }

  :hover {
    box-shadow: 6px 6px 12px rgba(255, 31, 31, 0.2);
  }
`;

export const FormTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: ${colors.white};
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
  border: 2px solid #ff2929;
  background: none;
  padding: 6px 12px;
  color: ${colors.white};
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
  border: 2px solid ${colors.red};
  background: none;
  padding: 6px 12px;
  color: ${colors.white};
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
  background: ${colors.red};
  cursor: pointer;
  outline: none;
  border: none;
  color: ${colors.black};
  font-size: 16px;
  transition: all 0.2 ease-in-out;

  &:hover {
    color: ${colors.black};
    background: ${colors.white};
    box-shadow: 2px 2px 8px rgba(246, 75, 75, 0.3);
    transition: all 0.2 ease-in-out;
  }
`;

//left section

export const SocialWrap = styled.div`
  text-align: left;
`;

export const SocialTitle = styled.p`
  color: ${colors.white};
  margin-bottom: 4px;
`;

export const SocialIcon = styled.a`
  color: ${colors.white};
  margin: 20px 10px 0 0;
  font-size: 22px;
`;
