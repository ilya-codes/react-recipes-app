import styled from "styled-components";

const HeaderLogo = styled.h1`
  text-align: center;
  font-size: 1.8rem;

  @media screen and (min-width: 1280px) {
    letter-spacing: 0.5rem;
    font-size: 2.2rem;
  }
`;

const Logo = (props) => {
  return <HeaderLogo>{props.title}</HeaderLogo>;
};

export default Logo;
