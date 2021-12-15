import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  text-decoration: none;
  display: grid;
  place-content: center;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  width: 8rem;
  height: 2rem;
  background-color: #9cb49f;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #8ba18e;
    box-shadow: 0 6px 16px #8ba18e8b;
  }
`;

const Button = (props) => {
  return <Btn>{props.children}</Btn>;
};

export default Button;
