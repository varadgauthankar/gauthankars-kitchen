import styled from "styled-components";

export const Wrapper = styled.div`
  background: #0f0e0d;
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
  color: #fff;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
`;

export const Heading = styled.p`
  color: #ffedc4;
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  margin-top: 10px;
`;

export const MenueItemCard = styled.div`
  /* width: 350px; width of the menue section */
  padding: 10px;
`;

export const MenueItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenueItemCategoryName = styled.p`
  color: #ffedc4;
  text-align: center;
`;

export const MenueItem = styled.div`
  display: flex;
`;

export const MenueItemName = styled.p`
  color: #fff;
`;

export const MenueItemPrice = styled.p`
  color: #fff;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  list-style: none;
`;

export const NoResult = styled.img`
  height: 200px;
  text-align: center;
`;

export const Column1 = styled.div`
  grid-area: col1;
  padding: 10px;
  border-radius: 8px;
  background: #2b2727;
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
  background: #2b2727;
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
  color: #ff2929;
  font-weight: 600;
  font-size: 26px;
`;
