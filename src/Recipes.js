import React from "react";
import styled from "styled-components";
import Recipe from "./Recipe";

const Cards = styled.main`
  margin: 16rem 2rem 6rem 2rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 4rem;

  .replacer {
    position: fixed;
    left: 0;
    top: 40vh;
    width: 100vw;
    font-size: 2rem;
    color: #8ba18e;
    text-align: center;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 11rem 4rem 6rem 4rem;

    .replacer {
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
        <p className="replacer">{message}</p>
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
