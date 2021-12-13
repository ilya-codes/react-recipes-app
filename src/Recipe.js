import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "./favoritesContext";
import Button from "./Button";
import { FaStar } from "react-icons/fa";

const RecipeCard = styled.div`
  width: 100%;
  padding: 0 2rem 2rem 2rem;
  border-radius: 5px;
  box-shadow: 0 6px 16px #8ba18e8b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  text-align: center;

  h1 {
    color: #8ba18e;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    max-height: 6rem;
  }

  img {
    border-radius: 5px;
    width: 100%;
  }

  .btns-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cardBtn {
    margin: 1rem;
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
`;

const Recipe = ({ handleDescription, recipe }) => {
  const context = useContext(FavoritesContext);
  const recipeIsFavorite = context.itemIsFavorite(recipe.url);

  const toggleFavorites = () => {
    if (recipeIsFavorite) {
      context.removeFavorite(recipe.url);
    } else {
      context.addFavorite(recipe);
    }
  };

  return (
    <RecipeCard>
      {recipeIsFavorite ? (
        <div className="fav-badge">
          <FaStar className="star" />
        </div>
      ) : (
        <div style={{ height: "2rem" }}></div>
      )}
      <h1>{recipe.label}</h1>
      <img src={recipe.image} alt="" />
      <div className="btns-container">
        <Link
          to="/description"
          className="link cardBtn"
          onClick={() => handleDescription(recipe)}
        >
          <Button>Recipe</Button>
        </Link>
        <span className="cardBtn" onClick={() => toggleFavorites()}>
          <Button>{recipeIsFavorite ? "Remove" : "Favorites"}</Button>
        </span>
      </div>
    </RecipeCard>
  );
};

export default Recipe;
