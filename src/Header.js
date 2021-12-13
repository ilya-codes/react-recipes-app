import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoritesContext from "./favoritesContext";
import Button from "./Button";

const Top = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100vw;
  height: 13rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #c1dfc4;

  .link {
    text-decoration: none;
  }

  .fav-count-info {
    width: 90vw;
    text-align: center;
    font-size: 1.5rem;
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
    line-height: 1.5rem;
    width: 1.5rem;
    /* height: 1.5rem; */
    background-color: #6c7d6e;
    border-radius: 5px;
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
    padding: 2rem 3rem;
    height: 6rem;

    .fav-count-info {
      width: 50vw;
      text-align: end;
    }
  }
`;

const Header = (props) => {
  const context = useContext(FavoritesContext);

  return (
    <Top>
      {props.children}
      {props.link === "/" && (
        <span className="fav-count-info">
          You have <span className="count">{context.totalFavorites}</span>{" "}
          favorite {context.totalFavorites === 1 ? "recipe" : "recipes"}
        </span>
      )}

      <Link to={props.link} className="link">
        <Button>
          {props.link === "/" ? (
            "Home"
          ) : (
            <span className="badged-btn">
              Favorites<div className="badge">{context.totalFavorites}</div>{" "}
            </span>
          )}
        </Button>
      </Link>
    </Top>
  );
};

export default Header;
