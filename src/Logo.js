import React from "react";
import styled from "styled-components";

const HeaderLogo = styled.h1`
  letter-spacing: 0.5rem;
  text-align: center;
`;

const Logo = (props) => {
  return <HeaderLogo>{props.title}</HeaderLogo>;
};

export default Logo;
