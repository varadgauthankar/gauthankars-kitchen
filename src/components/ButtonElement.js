import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  /* margin-top: 12px; */
  background: ${({ primary }) => (primary ? "#F64B4B" : "#fff")};
  white-space: nowrap;
  padding: 14px 30px;
  color: ${({ primary }) => (primary ? "#fff" : "#212121")};
  font-size: 20px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #212121;
    background: ${({ primary }) => (primary ? "#fff" : "#F64B4B")};
  }
`;
