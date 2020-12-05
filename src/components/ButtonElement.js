import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background: #ff2929;
  white-space: nowrap;

  padding: 14px 30px;
  color: #000;
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
    box-shadow: 2px 2px 8px rgba(255, 41, 41, 0.4);
  }
`;
