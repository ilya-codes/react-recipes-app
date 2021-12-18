import React from "react";
import styled from "styled-components";
import Recipe from "./Recipe";
import Loader from "./Loader";

const Cards = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding: 4rem 2rem 6rem 2rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 4rem;

  .replacer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .replacer-msg {
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: #8ba18e;
    text-align: center;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 11rem 4rem 6rem 4rem;

    .replacer-msg {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Recipes = ({ recipes, handleDescription, message }) => {
  return (
    <Cards>
      {!recipes.length ? (
        <div className="replacer">
          <span className="replacer-msg">
            {message}
            {message === "Loading" && <Loader />}
          </span>
        </div>
      ) : (
        recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.url}
            recipe={recipe.recipe}
            handleDescription={handleDescription}
          />
        ))
      )}
    </Cards>
  );
};

export default Recipes;
