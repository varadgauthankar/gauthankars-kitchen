import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background: red;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;
export const Column0 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 16px;
  grid-area: col0;
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 16px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 16px;
  grid-area: col2;
`;

export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 16px;
  grid-area: col3;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  grid-template-areas: "col0 col1 col2 col3";
`;
export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #fff;
    transition: 200ms ease-in-out;
    font-weight: bold;
  }
`;
export const Title = styled.p`
  color: #fff;
  font-weight: 700;
`;

export const Logo = styled.div`
  font-size: 32px;
  color: #fff;
`;
