import React, { useState } from 'react';
import './MovieSearch.css';

const MovieSearch = ({ onSearch }) => {
  const [year, setYear] = useState('');

  const handleSearch = () => {
    onSearch(year);
  };

  return (
    <div className="movie-search-container">
      <label>
        Pesquisar vencedores por ano:
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Pesquisar</button>
    </div>
  );
};

export default MovieSearch;
