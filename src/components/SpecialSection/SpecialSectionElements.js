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

export const ContentRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2 col3";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2" "col3 col3";
  }
`;

export const Heading = styled.p`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
    font-weight: 600;
  }
  @media screen and (max-width: 350px) {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const Column1 = styled.div`
  text-align: center;
  margin: 6px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
  margin: 6px;
  text-align: center;
`;

export const Column3 = styled.div`
  grid-area: col3;
  margin: 6px;
  text-align: center;
`;

export const FoodCardWrapper = styled.div`
  margin: 15px;
  @media screen and (max-width: 768px) {
    margin: 8px 0;
  }
`;

export const FoodCard = styled.div`
  height: 250px;
  width: 100%;
  border-radius: 12px;
  text-align: center;
  background: #000;
  position: relative;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 20vh;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 350px) {
    width: 100%;
    height: 18vh;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ImageText = styled.p`
  position: absolute;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
`;

export const FoodImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: #eee;
  border-radius: 12px;
  filter: brightness(30%);
  &:hover {
    transform: scale(1.1);

    font-size: 24px;
    transition: 0.2s ease-in-out;
  }
`;
