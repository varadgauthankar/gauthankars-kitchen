import styled from "styled-components";
import colors from "../../../utils/colors";

export const Wrapper = styled.div`
  background: ${colors.brown};
  padding-top: 10px;
`;

export const MenueGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const MenueContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 8px 18px;
`;

export const MenueSection = styled.div``;

export const Title = styled.p`
  color: ${colors.golden};
  font-size: 60px;
  text-align: center;
  font-family: "lato";
`;
export const HeadingImgWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 600px;
`;

export const HeadingImg = styled.img`
  width: 100%;
`;

export const MenueItemCard = styled.div`
  padding: 4px;
`;

export const MenueItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenueItemCategoryName = styled.p`
  color: ${colors.golden};
  text-align: center;
  font-size: 28px;
  font-family: "lato";
  line-height: 1.6;
`;

export const MenueItem = styled.div`
  display: flex;
`;

export const MenueItemName = styled.p`
  color: ${colors.white};
`;

export const MenueItemPrice = styled.p`
  color: ${colors.white};
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  padding: 2px 8px;
  list-style: none;
  border-radius: 8px;
  background-color: ${({ id }) => (id % 2 === 1 ? "#363131" : "")};
`;

export const NoResult = styled.img`
  height: 200px;
  text-align: center;
`;

export const Column1 = styled.div`
  grid-area: col1;
  padding: 10px;
  border-radius: 8px;
  background: ${colors.brownLight};
  margin: 8px 4px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    padding-bottom: 0;
    border-radius: 8px 8px 0px 0px;
  }
`;

export const Column2 = styled.div`
  grid-area: col2;
  padding: 10px;
  border-radius: 8px;
  background: ${colors.brownLight};
  margin: 8px 4px;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    padding-top: 0;

    border-radius: 0px 0px 8px 8px;
  }
`;

export const Line = styled.hr`
  margin: 2px auto;

  width: 100px;
  text-align: center;
`;

export const FailedToLoad = styled.div`
  height: 81vh;
  position: relative;
`;

export const ErrContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NoResultsImg = styled.img`
  height: 200px;
`;

export const ErrMsg = styled.p`
  text-align: center;
  padding: 10px 0;
  color: ${colors.red};
  font-weight: 600;
  font-size: 26px;
`;
