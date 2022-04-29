import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { FavoritesContextProvider } from "./favoritesContext";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </FavoritesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
