import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for products..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
