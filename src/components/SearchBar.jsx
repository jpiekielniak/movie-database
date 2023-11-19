import React from "react";
import "../styles/searchBar.css"

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search movies" />
    </div>
  );
};

export default SearchBar;