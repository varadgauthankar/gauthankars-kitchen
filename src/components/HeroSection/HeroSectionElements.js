import styled from "styled-components";
import colors from "../../utils/colors";
export const HeroContainer = styled.div`
  background: ${colors.brown};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`;

export const ContentWrap = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  /* margin-bottom: 20vh; */
`;

export const BgVideo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: ${colors.brown};
  filter: brightness(20%);
`;

export const LogoImage = styled.img`
  height: 100px;
  width: 100px;
  text-align: center;
  margin: 8px 0;
  margin-right: 30px;
`;

export const HeadLine = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: ${colors.white};
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    font-weight: 600;
  }

  @media screen and (max-width: 576px) {
    font-size: 24px;
    font-weight: 600;
  } ;
`;

export const TagLine = styled.p`
  font-size: 20px;
  color: ${colors.white};
  text-align: center;
`;
