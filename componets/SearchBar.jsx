import React from 'react';

export default function SearchBar({setQuery}) {
  return (
    <div className="search-container">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/622/622669.png" 
        alt="Search Icon" 
        className="search-icon"
        width="20" 
        height="20"
      />
      <input onChange={(e) => setQuery(e.target.value.toLowerCase())} type="text" placeholder="Search for a country..." />
    </div>
  );
}
