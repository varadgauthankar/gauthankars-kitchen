import styled from "styled-components";
import colors from "../../utils/colors";
export const HeroContainer = styled.div`
  background: ${({ isDark }) => (isDark ? colors.brown : colors.white)};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  z-index: 1;
`;

export const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
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
  font-size: ${({ isItalic }) => (isItalic ? "60px" : "60px")};
  color: ${({ isItalic, isDark }) =>
    isItalic ? colors.golden : isDark ? colors.white : colors.black};
  line-height: 1;
  font-family: ${({ isItalic }) => (isItalic ? "'Kristi', cursive;" : "Lato")};

  @media screen and (max-width: 360px) {
    font-size: 50px;
    line-height: 0.8;
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

export const Column3 = styled.div`
  grid-area: col3;
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
  background: ${colors.black};
  position: relative;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 20vh;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    height: 18vh;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
`;

export const ImageText = styled.p`
  font-size: 28px;
  color: ${colors.white};
  text-align: center;
  line-height: 1;
  pointer-events: none;
`;

export const ImageTextTag = styled.p`
  font-size: 24px;
  line-height: 1;
  color: ${colors.white};
  text-align: center;
  pointer-events: none;
  font-family: "kristi";
`;

export const FoodImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: ${colors.black};
  border-radius: 12px;
  filter: brightness(30%);
  &:hover {
    transform: scale(1.1);
    font-size: 24px;
    transition: 0.2s ease-in-out;
  }
`;
