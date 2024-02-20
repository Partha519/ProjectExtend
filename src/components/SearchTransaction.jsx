import React, { useState } from 'react';
import '../styles/SearchTransaction.css';

const SearchTransaction = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  }

  return (
    <div className="search-input">
      <input className="search-button" type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search transaction" />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchTransaction;
