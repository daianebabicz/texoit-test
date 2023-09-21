import React from 'react';
import './MovieTable.css';

const MovieTable = ({ movies }) => {
  if (!movies.length) {
    return <div className="movie-table-empty">Nenhum filme encontrado.</div>;
  }

  return (
    <div className="movie-table-container">
      <table className="movie-table">
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

export default MovieTable;
