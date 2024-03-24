import React from 'react';

const Search = ({ searchInput, handleInputChange }) => {
  return (
    <div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search videos by title, artist or label"
        value={searchInput}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
