import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 1.8rem;
  background-color: #c1dfc4;
  color: #fff;
  font-size: 0.8rem;
  display: grid;
  place-content: center;
  border-radius: 15px 0 0 0;
  overflow: hidden;

  p {
    margin: 0 0.4rem;
  }

  @media screen and (min-width: 900px) {
    width: 100vw;
    border-radius: 0;
    font-size: 1rem;
  }
`;
