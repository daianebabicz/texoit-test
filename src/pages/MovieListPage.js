import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import MovieFilter from '../components/MovieFilter/MovieFilter';
import { fetchMovies } from '../utils/api';

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({ year: '', winner: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies(filters);
        setMovies(data);
      } catch (error) {
        console.error('Erro ao buscar dados dos filmes:', error);
      }
    };

    fetchData();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1>Página da Lista de Filmes</h1>
      <MovieFilter onFilterChange={handleFilterChange} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieListPage;
