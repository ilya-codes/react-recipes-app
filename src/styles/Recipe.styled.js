import styled from "styled-components";

export const StyledRecipe = styled.div`
  height: unset;
  width: 100%;
  margin: auto;
  margin-top: 0;
  padding: 0 2rem 1rem 2rem;
  border-radius: 5px;
  box-shadow: 0 6px 16px #8ba18e8b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  text-align: center;
  background-color: #fff;

  .recipe-header {
    color: #8ba18e;
    font-size: 1.4rem;
  }

  .image-container {
    margin: 1rem 0;
    width: 100%;
  }

  img {
    display: block;
    border-radius: 5px;
    width: 100%;
  }

  .btns-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .cardBtn {
    margin: 0.5rem;
  }

  .link {
    text-decoration: none;
  }

  .fav-badge {
    position: relative;
    width: 12rem;
    height: 2rem;
    background-color: #9cb49f;
    margin-left: 90%;
    transform: rotate(45deg);
  }

  .star {
    color: #fff;
    font-size: 1.5rem;
    transform: rotate(-45deg);
    position: relative;
    left: 1.4rem;
    top: 0.2rem;
  }

  @media screen and (min-width: 900px) {
    height: 100%;
    padding: 0 2rem 2rem 2rem;

    .recipe-header {
      margin-bottom: 2rem;
      font-size: 1.8rem;
    }
  }
`;
