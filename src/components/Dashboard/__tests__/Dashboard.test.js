import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

test('Renderiza o painel do dashboard corretamente', () => {
  const dashboardData = {
    yearsWithMultipleWinners: [
      { year: 2022, winnerCount: 3 },
      { year: 2021, winnerCount: 2 },
    ],
    topStudios: [
      { name: 'Estúdio A', winCount: 5 },
      { name: 'Estúdio B', winCount: 4 },
    ],
    producersWithMaxMinInterval: {
      min: [{ producer: 'Produtor X', interval: 1, previousWin: 2021, followingWin: 2022 }],
      max: [{ producer: 'Produtor Y', interval: 10, previousWin: 2010, followingWin: 2020 }],
    },
    winnersByYear: [
      { id: 1, year: 2022, title: 'Filme 1', studios: ['Estúdio 1'], producers: ['Produtor 1'], winner: true },
      { id: 2, year: 2022, title: 'Filme 2', studios: ['Estúdio 2'], producers: ['Produtor 2'], winner: false },
    ],
  };

  const { getByText } = render(<Dashboard dashboardData={dashboardData} />);

  expect(getByText('Anos com mais de um vencedor')).toBeInTheDocument();
  expect(getByText('2022 (3 vencedores)')).toBeInTheDocument();
  expect(getByText('2021 (2 vencedores)')).toBeInTheDocument();

  expect(getByText('Três estúdios com mais vitórias')).toBeInTheDocument();
  expect(getByText('Estúdio A: 5 vitórias')).toBeInTheDocument();
  expect(getByText('Estúdio B: 4 vitórias')).toBeInTheDocument();

  expect(getByText('Produtores com maior intervalo entre vitórias')).toBeInTheDocument();
  expect(getByText('Produtor Y: 10 anos (2010 - 2020)')).toBeInTheDocument();

  expect(getByText('Vencedores de 2022')).toBeInTheDocument();
  expect(getByText('Filme 1')).toBeInTheDocument();
  expect(getByText('Filme 2')).toBeInTheDocument();
});
