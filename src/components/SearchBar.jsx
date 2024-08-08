import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border rounded-lg"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
