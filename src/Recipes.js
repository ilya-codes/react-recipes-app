import Recipe from "./Recipe";
import Loader from "./Loader";
import { StyledRecipes } from "./styles/Recipes.styled";

const Recipes = ({ recipes, handleDescription, message }) => {
  return (
    <StyledRecipes>
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
    </StyledRecipes>
  );
};

export default Recipes;
