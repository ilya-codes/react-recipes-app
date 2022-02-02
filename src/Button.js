import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  text-decoration: none;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  width: 8rem;
  height: 2rem;
  background-color: #9cb49f;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  :hover {
    background-color: #8ba18e;
    box-shadow: 0 6px 16px #8ba18e8b;
  }
`;

const Button = (props) => {
  const button =
    props.role === "search" ? (
      <Btn type="submit" form="search-form" className={props.className}>
        {props.children}
      </Btn>
    ) : (
      <Btn>{props.children}</Btn>
    );

  return button;
};

export default Button;
