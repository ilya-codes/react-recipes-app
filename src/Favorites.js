import React from "react";
import { useContext } from "react";
import FavoritesContext from "./favoritesContext";
import Recipes from "./Recipes";

const Favorites = ({ handleDescription }) => {
  const context = useContext(FavoritesContext);

  return (
    <div>
      <Recipes
        recipes={context.favorites}
        // handleDescription={handleDescription}
        message="No Favorites Yet"
      />
    </div>
  );
};

export default Favorites;
