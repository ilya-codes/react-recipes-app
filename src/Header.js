import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "./favoritesContext";
import Button from "./Button";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { StyledHeader } from "./styles/Header.styled";

const Header = ({ link, search, getSearch, updateSearch }) => {
  const context = useContext(FavoritesContext);

  return (
    <StyledHeader>
      {link === "/" ? (
        <>
          <div className="logo-container">
            <Logo title="Favorites" />
          </div>
          <span className="fav-count-info">
            You have <span className="count">{context.totalFavorites}</span>{" "}
            favorite {context.totalFavorites === 1 ? "recipe" : "recipes"}
          </span>
          <Link to={link} className="link">
            <Button>
              <FaHome /> Home
            </Button>
          </Link>
        </>
      ) : (
        <>
          <div className="logo-container">
            <Logo title="Recipes App" />
          </div>
          <Navigation
            search={search}
            getSearch={getSearch}
            updateSearch={updateSearch}
          />
          <div className="btn-container">
            <Button role="search" className="search-btn">
              <FaSearch />
              Search
            </Button>
            <Link to={link} className="link">
              <Button>
                <span className="badged-btn">Favorites</span>
              </Button>
              {context.totalFavorites > 0 && (
                <div className="badge">{context.totalFavorites}</div>
              )}
            </Link>
          </div>
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
