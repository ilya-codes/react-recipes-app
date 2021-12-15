import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Recipes from "./Recipes";
import CardDescription from "./CardDescription";
import Favorites from "./Favorites";
import Footer from "./Footer";

const App = () => {
  const APP_ID = "d7999673";
  const APP_KEY = "bff4d2942803751399e5562e530d0981";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const handleDescription = (recipe) => {
    setDescription(recipe);
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Header link="/favorites">
            <Logo title="Recipes App" />
            <Navigation
              search={search}
              getSearch={getSearch}
              updateSearch={updateSearch}
            />
          </Header>
          <Recipes
            recipes={recipes}
            handleDescription={handleDescription}
            message="Nothing Found"
          />
        </Route>
        <Route path="/description">
          <CardDescription description={description} />
        </Route>
        <Route path="/favorites">
          <Header link="/">
            <Logo title="Favorite Recipes" />
          </Header>
          <Favorites handleDescription={handleDescription} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
