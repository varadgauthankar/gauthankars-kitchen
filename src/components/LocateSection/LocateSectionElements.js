import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdDirections } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 1;
`;
export const Wrapper = styled.div`
  /* display: grid; */
  z-index: 1;
  /* height: 60vh; */
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
    margin-top: 50px;
  }

  /* justify-content: space-around; */
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
  text-align: center;
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
  text-align: center;
`;

export const Heading = styled.p`
  color: #212121;
  text-align: left;
  font-size: 32px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 350px) {
    font-size: 28px;
  }
`;

export const Address = styled.p`
  color: #212121;
  text-align: left;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 350px) {
    font-size: 20px;
  }
`;

export const LocationImgWrap = styled.div`
  height: 300px;
  width: 450px;
  margin: 30px auto;
  overflow: hidden;
  box-shadow: 4px 4px 12px rgba(255, 41, 41, 0.4);
  cursor: pointer;
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

export const LocationMap = styled.img`
  background: #eee;
  height: 100%;
  width: 100%;
  object-fit: cover;
  text-align: center;
  border-radius: 12px;
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
  }
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
  background: #ff2929;
  white-space: nowrap;

  padding: 14px 30px;
  color: #000;
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
    background: #fff;
    box-shadow: 6px 6px 12px rgba(255, 41, 41, 0.6);
  }
`;

export const DirectionIcon = styled(MdDirections)`
  margin-left: 8px;
  margin-bottom: 4px;
  vertical-align: middle;
  font-size: 28px;
`;
