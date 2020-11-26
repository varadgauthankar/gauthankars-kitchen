import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background: #f64b4b;
  white-space: nowrap;

  padding: 14px 30px;
  color: #212121;
  font-size: 20px;
  outline: none;
  border: none;
  display: inline-block;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #212121;
    background: #fff;
    box-shadow: 2px 2px 8px rgba(246, 75, 75, 0.3);
  }
`;
