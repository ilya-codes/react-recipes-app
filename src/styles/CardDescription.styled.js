import styled from "styled-components";

export const StyledDescription = styled.div`
  align-self: center;
  margin: 2rem 0 4rem 0;
  width: 85%;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 6px 16px #8ba18e8b;
  display: grid;
  gap: 2rem;
  justify-items: center;
  overflow: hidden;
  background-color: #fff;

  .desc-header {
    color: #8ba18e;
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .desc-list {
    width: 100%;
    padding: 2rem;
    overflow: hidden;
    .desc-item {
      list-style-type: circle;
    }
  }

  .side-info {
    align-self: center;
    justify-self: end;
  }

  .accent {
    color: #8ba18e;
    font-weight: 600;
  }

  .link {
    text-decoration: none;
  }
  @media screen and (min-width: 900px) {
    width: 60vw;
    padding: 2rem 4rem;

    .desc-header {
      margin-bottom: 2rem;
      font-size: 1.8rem;
    }
  }
`;
