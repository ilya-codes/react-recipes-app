import { StyledNavigation } from "./styles/Navigation.styled";

const Navigation = ({ search, getSearch, updateSearch }) => {
  return (
    <StyledNavigation>
      <form className="search-form" id="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
      </form>
    </StyledNavigation>
  );
};

export default Navigation;
