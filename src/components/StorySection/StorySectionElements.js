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
  padding: 0 24px;
  text-align: center;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const ContentRow = styled.div`
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

export const ImageWrapper = styled.div`
  width: 400px;
  height: 250px;
  margin: 7px auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 4px 4px 12px rgba(255, 41, 41, 0.4);

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 200px;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
    height: 24vh;
    margin: 0px auto;
  }

  :hover {
    box-shadow: 6px 6px 12px rgba(255, 41, 41, 0.4);
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;

export const TextWrapper = styled.div`
  padding: 0 10px 0px 10px;
`;

export const TextWrapperMobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Heading = styled.p`
  font-size: ${({ isItalic }) => (isItalic ? "60px" : "60px")};
  text-align: center;
  color: ${({ isItalic, isDark }) =>
    isItalic ? colors.golden : isDark ? colors.white : colors.black};

  line-height: 0.8;
  font-weight: ${({ isItalic }) => (isItalic ? "300" : "400")};
  font-family: ${({ isItalic }) => (isItalic ? "'Kristi', cursive;" : "Lato")};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeadingMobile = styled.p`
  font-size: ${({ isItalic }) => (isItalic ? "60px" : "60px")};
  text-align: center;
  line-height: 0.8;
  color: ${({ isItalic, isDark }) =>
    isItalic ? colors.golden : isDark ? colors.white : colors.black};

  font-weight: ${({ isItalic }) => (isItalic ? "300" : "400")};
  font-family: ${({ isItalic }) => (isItalic ? "'Kristi', cursive;" : "Lato")};

  @media screen and (max-width: 360px) {
    font-size: 50px;
    line-height: 0.8;
  }
`;
export const StoryText = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${({ isDark }) => (isDark ? colors.white : colors.black)};

  @media screen and (max-width: 360px) {
    font-size: 18px;
    line-height: 1.2;
  }
`;

export const HighlightedText = styled.a`
  background-color: ${colors.lightGolden};
  padding: 0 5px;
  border-radius: 8px;
  color: ${({ isDark }) => (isDark ? colors.white : colors.black)};

  :hover {
    background-color: ${colors.golden};
  }
`;
