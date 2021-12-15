import React from "react";
import styled from "styled-components";
import Button from "./Button";

const SearchBar = styled.nav`
  margin-top: 1rem;

  form {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    bottom: 0.8rem;
  }

  input {
    height: 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    flex: 1;
    outline: none;
    padding-left: 1rem;
    color: #8ba18e;
    width: 80vw;
    margin: 1rem auto;
  }

  @media screen and (min-width: 900px) {
    margin-top: 0;

    form {
      width: 50vw;
      justify-content: space-between;
      flex-direction: row;
      margin: 0;
      align-items: flex-start;
      position: initial;
    }

    input {
      margin: 0 1rem 0 0;
    }
  }
`;

const Navigation = ({ search, getSearch, updateSearch }) => {
  return (
    <SearchBar>
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <Button type="submit">Search</Button>
      </form>
    </SearchBar>
  );
};

export default Navigation;
