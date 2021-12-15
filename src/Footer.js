import React from "react";
import styled from "styled-components";

const Bottom = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 2.2rem;
  background-color: #c1dfc4;
  color: #fff;
  font-size: 1.5rem;
  display: grid;
  place-content: center;
  overflow: hidden;
`;
const Footer = () => {
  return (
    <Bottom>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </Bottom>
  );
};

export default Footer;
