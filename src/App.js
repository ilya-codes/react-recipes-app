import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Logo from "./Logo";
import Recipes from "./Recipes";
import CardDescription from "./CardDescription";
import Favorites from "./Favorites";
import Footer from "./Footer";
import GlobalStyles from "./styles/Global";

const App = () => {
  const APP_ID = "d7999673";
  const APP_KEY = "bff4d2942803751399e5562e530d0981";

  const initialQuery = ["chicken", "fish", "beef", "lamb", "pork"][
    Math.floor(Math.random() * 6)
  ];

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(initialQuery);
  const [description, setDescription] = useState("");
  const [replacer, setReplacer] = useState("Loading");

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2/?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        console.log(data);
        setReplacer(data.count ? "Loading" : "Nothing found");
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
    setReplacer("Loading");
    setRecipes([]);
    setSearch("");
  };

  const handleDescription = (recipe) => {
    setDescription(recipe);
  };

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header
              link="/favorites"
              search={search}
              getSearch={getSearch}
              updateSearch={updateSearch}
            >
              <Logo title="Recipes App" />
            </Header>
            <Recipes
              recipes={recipes}
              handleDescription={handleDescription}
              message={replacer}
            />
          </Route>
          <Route path="/description">
            <CardDescription description={description} />
          </Route>
          <Route path="/favorites">
            <Header
              link="/"
              search={search}
              getSearch={getSearch}
              updateSearch={updateSearch}
            >
              <Logo title="Favorite Recipes" />
            </Header>
            <Favorites handleDescription={handleDescription} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default App;
