import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdDirections } from "react-icons/md";
import colors from "../../utils/colors";

export const HeroContainer = styled.div`
  background: ${colors.white};
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
  }
  @media screen and (max-width: 350px) {
    /* margin-top: 50px; */
  }
`;

export const LocateContentRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled.div`
  text-align: left;
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
  text-align: center;
`;

export const Heading = styled.p`
  color: ${({ isItalic }) => (isItalic ? colors.golden : colors.black)};
  font-size: ${({ isItalic }) => (isItalic ? "60px" : "60px")};
  font-family: ${({ isItalic }) => (isItalic ? "'Kristi', cursive" : "Lato")};
  line-height: 1;
  margin-bottom: ${({ isItalic }) => (isItalic ? "0" : "20px")};

  @media screen and (max-width: 350px) {
    font-size: 28px;
  }
`;

export const Address = styled.p`
  color: ${colors.black};
  font-size: 22px;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 350px) {
    font-size: 18px;
  }
`;

export const HourTitle = styled.p`
  font-size: 26px;
  font-weight: bold;
  font-family: "lato";
`;

export const Day = styled.p`
  font-size: 20;
`;

export const LocationImgWrap = styled.div`
  height: 300px;
  width: 450px;
  margin: 30px auto;
  overflow: hidden;
  box-shadow: 4px 4px 12px rgba(255, 41, 41, 0.4);
  border-radius: 12px;
  @media screen and (max-width: 500px) {
    height: 30vh;
    width: 80vw;
  }

  @media screen and (max-width: 350px) {
    margin: 20px auto;
  }

  :hover {
    box-shadow: 6px 6px 12px rgba(255, 41, 41, 0.4);
  }
`;

export const LocationMap = styled.iframe`
  height: 100%;
  width: 100%;
  object-fit: cover;
  text-align: center;
  border-radius: 12px;
  border: 0;
`;

export const BtnWrap = styled.div`
  text-align: center;
  margin-top: 20px;
  text-align: left;
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BtnWrap2 = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${colors.red};
  white-space: nowrap;

  padding: 14px 30px;
  color: ${colors.black};
  font-size: 20px;
  outline: none;
  border: none;
  display: inline-block;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 4px 4px 12px rgba(255, 41, 41, 0.4);

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000;
    background: ${colors.white};
    box-shadow: 6px 6px 12px rgba(255, 41, 41, 0.6);
  }
`;

export const DirectionIcon = styled(MdDirections)`
  margin-left: 8px;
  margin-bottom: 4px;
  vertical-align: middle;
  font-size: 28px;
`;
