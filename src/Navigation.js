import React from "react";
import styled from "styled-components";

const SearchBar = styled.nav`
  form {
    width: 90vw;
    margin: auto;
  }

  input {
    height: 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    outline: none;
    padding-left: 1rem;
    color: #8ba18e;
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (min-width: 900px) {
    margin-top: 0;

    form {
      width: 30vw;
      margin-right: 1rem;
    }
  }

  @media screen and (min-width: 1280px) {
    form {
      width: 40vw;
    }
  }
`;

const Navigation = ({ search, getSearch, updateSearch }) => {
  return (
    <SearchBar>
      <form className="search-form" id="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
      </form>
    </SearchBar>
  );
};

export default Navigation;
