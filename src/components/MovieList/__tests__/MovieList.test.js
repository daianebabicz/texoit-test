import React from 'react';
import { render, waitFor } from '@testing-library/react';
import MovieList from '../MovieList';

jest.mock('../../../utils/api', () => ({
  fetchMovies: jest.fn(() =>
    Promise.resolve([
      { id: 1, year: 2022, title: 'Filme 1', studios: ['Estúdio 1'], producers: ['Produtor 1'], winner: true },
      { id: 2, year: 2023, title: 'Filme 2', studios: ['Estúdio 2'], producers: ['Produtor 2'], winner: false },
    ])
  ),
  fetchWinnersByYear: jest.fn(() => Promise.resolve([])),
}));

test('Renderiza a lista de filmes corretamente', async () => {
  const { getByText } = render(<MovieList />);

  await waitFor(() => {
    expect(getByText('Lista de Filmes')).toBeInTheDocument();
    expect(getByText('Ano')).toBeInTheDocument();
    expect(getByText('Vencedor')).toBeInTheDocument();
    expect(getByText('2022')).toBeInTheDocument();
    expect(getByText('2023')).toBeInTheDocument();
    expect(getByText('Sim')).toBeInTheDocument();
    expect(getByText('Não')).toBeInTheDocument();
  });
});
