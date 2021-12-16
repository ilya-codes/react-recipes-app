import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { FavoritesContextProvider } from "./favoritesContext";

ReactDOM.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <Router>
        <App />
      </Router>
    </FavoritesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
