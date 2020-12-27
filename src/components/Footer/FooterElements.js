import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import colors from "../../utils/colors";

import {
  FaFacebookF as Fb,
  FaInstagram as Insta,
  FaMapMarkerAlt as Map,
  FaPhoneAlt as Call,
  FaEnvelope as Mail,
} from "react-icons/fa";

export const Container = styled.div`
  padding: 80px 50px;
  background: ${colors.black};

  @media screen and (max-width: 768px) {
    padding: 60px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Column0 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto 0;
  grid-area: col0;
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  grid-area: col1;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  grid-area: col2;
`;

export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  grid-area: col3;

  @media screen and (max-width: 768px) {
    margin-left: auto;
  }
`;

export const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  grid-area: col4;
`;

export const Row = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas: "col0 col1 col2 col3 col4";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col0 col0 col0 col0" "col2 col2 col3 col3" "col4 col4 col4 col4" "col1 col1 col1 col1";
  }
`;

export const LinkS = styled(LinkScroll)`
  font-size: 16px;
  color: ${colors.white};
  text-decoration: none;
  cursor: pointer;
  margin: 2px 0;
`;

export const LinkA = styled.a`
  font-size: 16px;
  color: ${colors.white};
  text-decoration: none;
  cursor: pointer;
  margin: 2px 0;
`;
export const Title = styled.p`
  font-size: 18px;
  color: ${colors.golden};
  font-weight: 700;
  margin-bottom: 6px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SubTitle = styled.p`
  font-size: 16px;
  color: ${colors.white};
  margin: 2px 0;
`;
export const LogoFull = styled.img`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Logo = styled.img`
  height: 110px;
  margin-right: 20px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MapIcon = styled(Map)`
  color: ${colors.white};
  margin-right: 8px;
`;

export const MailIcon = styled(Mail)`
  color: ${colors.white};
  margin-right: 8px;
`;

export const CallIcon = styled(Call)`
  color: ${colors.white};
  margin-right: 8px;
`;

export const FbIcon = styled(Fb)`
  color: ${colors.white};
  margin-right: 8px;
`;

export const InstaIcon = styled(Insta)`
  color: ${colors.white};
  margin-right: 8px;
`;
