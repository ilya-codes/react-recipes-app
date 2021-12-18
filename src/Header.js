import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoritesContext from "./favoritesContext";
import Button from "./Button";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Top = styled.header`
  position: sticky;
  z-index: 2;
  top: -4rem;
  width: 100vw;
  height: 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  color: #fff;
  background-color: #c1dfc4;
  overflow: hidden;

  .logo-container {
    position: initial;
  }

  .link {
    text-decoration: none;
  }

  .fav-count-info {
    text-align: center;
    font-size: 1.2rem;
    color: #fff;
  }

  .count {
    margin: 0 0.2rem;
    color: #8ba18e;
    font-weight: 600;
  }

  .badged-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1.5rem;
  }

  .badge {
    position: relative;
    bottom: 0.9rem;
    left: 0.5rem;
    height: 1.5rem;
    width: 1.5rem;
    line-height: 1.6rem;
    background-color: #6c7d6e;
    border-radius: 50%;
  }

  .btn-container {
    width: 18rem;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 900px) {
    justify-content: flex-end;
    flex-direction: row;
    padding: 2rem 3rem;
    min-height: 0;
    height: 6rem;
    position: fixed;
    top: 0;
    ::after {
      top: 6rem;
    }

    .logo-container {
      position: fixed;
      left: 3rem;
    }

    .fav-count-info {
      font-size: 1.5rem;
      text-align: end;
      margin-right: 2rem;
    }
  }
`;

const Header = ({ link, search, getSearch, updateSearch }) => {
  const context = useContext(FavoritesContext);

  return (
    <Top>
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
            <Button role="search">
              <FaSearch />
              Search
            </Button>
            <Link to={link} className="link">
              <Button>
                <span className="badged-btn">
                  Favorites
                  <div className="badge">{context.totalFavorites}</div>{" "}
                </span>
              </Button>
            </Link>
          </div>
        </>
      )}
    </Top>
  );
};

export default Header;
