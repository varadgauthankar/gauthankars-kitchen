import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #414141;
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

  padding: 0 24px;
  text-align: center;
  margin-bottom: 100px;

  /* @media screen and (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 60px;
  } */
`;
export const Heading = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 30px;
`;

export const Grid = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PicWrap = styled.div`
  text-align: center;
  background: #eee;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 4px #212121;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    transition: all 200ms ease-out;
    transform: scale(1.1);
  }
`;
