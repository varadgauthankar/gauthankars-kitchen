import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #fff;
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
  margin: 12px auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 26vh;
  }

  @media screen and (max-width: 350px) {
    width: 100%;
    height: 22vh;
    margin: 8px auto;
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
  padding: 12px;
  margin-bottom: 22px;
`;

export const Heading = styled.p`
  font-size: 32px;
  text-align: center;
  color: #000;
  font-weight: 700;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeadingMobile = styled.p`
  font-size: 32px;
  text-align: center;
  color: #000;
  font-weight: 700;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 350px) {
    margin-bottom: 4px;

    font-size: 28px;
    font-weight: 600;
  }
`;
export const StoryText = styled.p`
  font-size: 18px;
  text-align: center;
  color: #000;

  @media screen and (max-width: 350px) {
    font-size: 16px;
    line-height: 1.2;
  }
`;
