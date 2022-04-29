import styled from "styled-components";

export const StyledBtn = styled.button`
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
