import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoritesContext from "./favoritesContext";
import Button from "./Button";
import { FaHome } from "react-icons/fa";

const Top = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100vw;
  height: 12rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background-color: #c1dfc4;

  .link {
    text-decoration: none;
    display: flex;

    justify-content: center;
    Button {
      position: fixed;
      top: 11rem;
      z-index: 2;
    }
  }

  .fav-count-info {
    width: 90vw;
    margin-top: 2rem;
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

  .home-btn {
    width: 5.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 900px) {
    justify-content: space-between;
    flex-direction: row;
    padding: 2rem 3rem;
    height: 6rem;
    ::after {
      top: 6rem;
    }

    .link {
      display: block;
      Button {
        position: initial;
      }
    }

    .fav-count-info {
      width: 50vw;
      margin-top: 0;
      font-size: 1.5rem;
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
            <span className="home-btn">
              <FaHome /> Home
            </span>
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
