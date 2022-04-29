import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 2;
  top: -4.5rem;
  width: 100vw;
  height: 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  color: #fff;
  background-color: #c1dfc4;
  overflow: hidden;

  .logo-container {
    position: relative;
    background-color: #9cb49f;
    padding: 1rem 1rem 0.5rem 1rem;
    border-radius: 0 0 15px 15px;
    bottom: 1rem;
  }

  .link {
    text-decoration: none;
    height: 2rem;
    margin: 1rem;
  }

  .fav-count-info {
    text-align: center;
    font-size: 1.2rem;
  }

  .count {
    margin: 0 0.2rem;
    color: #8ba18e;
    font-weight: 600;
  }

  .badge {
    position: relative;
    bottom: 2.5rem;
    left: 7.2rem;
    height: 1.5rem;
    width: 1.5rem;
    color: #fff;
    text-align: center;
    background-color: #6c7d6e;
    border-radius: 50%;
  }

  .btn-container {
    width: 18rem;
    display: flex;
    justify-content: space-between;

    .search-btn {
      margin: 1rem 0;
    }
  }

  @media screen and (min-width: 900px) {
    justify-content: flex-end;
    flex-direction: row;
    padding: 2rem 3rem;
    min-height: 0;
    height: 6rem;
    position: fixed;
    top: 0;

    .logo-container {
      padding: 1rem 1rem 0.5rem 4rem;
      position: fixed;
      top: 0;
      left: 0;
      border-radius: 0 0 15px 0;
      bottom: unset;
    }

    .fav-count-info {
      font-size: 1.5rem;
      text-align: end;
      margin-right: 2rem;
    }
  }
`;
