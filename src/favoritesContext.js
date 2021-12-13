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
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default FavoritesContext;
