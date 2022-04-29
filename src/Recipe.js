import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "./favoritesContext";
import Button from "./Button";
import { FaStar, FaBookOpen } from "react-icons/fa";
import { StyledRecipe } from "./styles/Recipe.styled";

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
    <StyledRecipe>
      {recipeIsFavorite ? (
        <div className="fav-badge">
          <FaStar className="star" />
        </div>
      ) : (
        <div style={{ height: "2rem" }}></div>
      )}
      <h1 className="recipe-header">{recipe.label}</h1>
      <div className="image-container">
        <img src={recipe.image} alt="" />
      </div>
      <div className="btns-container">
        <Link
          to="/description"
          className="link cardBtn"
          onClick={() => handleDescription(recipe)}
        >
          <Button>
            <FaBookOpen />
            Recipe
          </Button>
        </Link>
        <span className="cardBtn" onClick={() => toggleFavorites()}>
          <Button>{recipeIsFavorite ? "Remove" : "To Favorites"}</Button>
        </span>
      </div>
    </StyledRecipe>
  );
};

export default Recipe;
