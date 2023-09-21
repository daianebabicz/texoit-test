import React, { useState } from 'react';

const MovieFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({ year: '', winner: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="movie-filter">
      <label htmlFor="year"> 
        Ano:
        <input
          type="text"
          name="year"
          id="year" 
          value={filters.year}
          onChange={handleFilterChange}
        />
      </label>
      <label>
        Vencedor:
        <select name="winner" value={filters.winner} onChange={handleFilterChange}>
          <option value="">Todos</option>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      </label>
    </div>
  );
};

export default MovieFilter;
