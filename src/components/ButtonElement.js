import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../utils/colors";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${colors.red};
  white-space: nowrap;
  padding: 14px 30px;
  color: ${colors.black};
  font-size: 20px;
  outline: none;
  border: none;
  display: inline-block;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 6px 6px 12px rgba(255, 41, 41, 0.2);

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${colors.black};
    background: ${colors.white};

    box-shadow: 6px 6px 12px rgba(255, 41, 41, 0.4);
  }
`;
