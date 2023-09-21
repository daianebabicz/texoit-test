import React from 'react';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list-container">
      <h2>Lista de Todos os Filmes</h2>
      <table className="movie-list-table">
        <thead>
          <tr>
            <th>Ano</th>
            <th>Título</th>
            <th>Estúdios</th>
            <th>Produtores</th>
            <th>Vencedor</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.year}</td>
              <td>{movie.title}</td>
              <td>{movie.studios.join(', ')}</td>
              <td>{movie.producers.join(', ')}</td>
              <td>{movie.winner ? 'Sim' : 'Não'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
