import React from 'react';
import { render } from '@testing-library/react';
import MovieTable from '../MovieTable';

test('Renderiza a tabela de filmes corretamente', () => {
  const movies = [
    { id: 1, year: 2022, title: 'Filme 1', studios: ['Estúdio 1'], producers: ['Produtor 1'], winner: true },
    { id: 2, year: 2023, title: 'Filme 2', studios: ['Estúdio 2'], producers: ['Produtor 2'], winner: false },
  ];

  const { getByText } = render(<MovieTable movies={movies} />);

  expect(getByText('Ano')).toBeInTheDocument();
  expect(getByText('Título')).toBeInTheDocument();
  expect(getByText('Estúdios')).toBeInTheDocument();
  expect(getByText('Produtores')).toBeInTheDocument();
  expect(getByText('Vencedor')).toBeInTheDocument();

  expect(getByText('2022')).toBeInTheDocument();
  expect(getByText('Filme 1')).toBeInTheDocument();
  expect(getByText('Estúdio 1')).toBeInTheDocument();
  expect(getByText('Produtor 1')).toBeInTheDocument();
  expect(getByText('Sim')).toBeInTheDocument();
});
