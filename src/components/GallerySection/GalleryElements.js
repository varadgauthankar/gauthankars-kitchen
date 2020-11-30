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

  /* @media screen and (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 60px;
  } */
`;

export const Grid = styled.div`
  margin: 0 auto;
  align-items: center;
  display: grid;
  grid-template-areas: "col1 col2 col3 col4" "col5 col6 col7 col8";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col2" "col3 col4" "col5 col6" "col7 col8";
  }
`;

export const PicWrap = styled.div`
  text-align: center;
  grid-area: ${(props) => props.col};
  margin: 4px 4px;
  background: #eee;
  height: 20vh;
  width: 20vh;
`;

export const Image = styled.img`
  height: 100%;

  width: 100%;

  object-fit: cover;
`;
