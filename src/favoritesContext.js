import { useState } from "react";
import { createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (recipe) => {},
  removeFavorite: (recipeUrl) => {},
  itemIsFavorite: (recipeUrl) => {},
});

export const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useLocalStorage("favoriteRecipes", []);

  const addFavHandler = (recipe) => {
    setFavorites([...favorites, { recipe }]);
  };

  const removeFavHandler = (recipeUrl) => {
    let filteredFavorites = favorites.filter((item) => {
      return item.recipe.url !== recipeUrl;
    });
    setFavorites(filteredFavorites);
  };

  const isFavHandler = (recipeUrl) => {
    return favorites.some((recipe) => {
      return recipe.recipe.url === recipeUrl;
    });
  };

  const context = {
    favorites: favorites,
    totalFavorites: favorites.length,
    addFavorite: addFavHandler,
    removeFavorite: removeFavHandler,
    itemIsFavorite: isFavHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default FavoritesContext;
