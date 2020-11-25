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
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const Address = styled.p`
  color: #212121;
  text-align: center;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const LocationImgWrap = styled.div`
  height: 35vh;
  width: 450px;
  margin: 38px auto;
  @media screen and (max-width: 500px) {
    height: 30vh;
    width: 80vw;
  } ;
`;

export const LocationMap = styled.img`
  background: #eee;
  height: 100%;
  width: 100%;
  object-fit: cover;
  text-align: center;
`;

export const BtnWrap = styled.div`
  text-align: center;
  display: none;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    text-align: left;
    display: block;
  }
`;

export const BtnWrap2 = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background: #f64b4b;
  white-space: nowrap;

  padding: 14px 30px;
  color: #212121;
  font-size: 20px;
  outline: none;
  border: none;
  display: inline-block;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #212121;
    background: #fff;
    box-shadow: 2px 2px 8px rgba(246, 75, 75, 0.3);
  }
`;

export const DirectionIcon = styled(MdDirections)`
  margin-left: 8px;
  margin-bottom: 4px;
  vertical-align: middle;
  font-size: 28px;
`;
