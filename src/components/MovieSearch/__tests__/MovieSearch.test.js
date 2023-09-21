import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieSearch from '../MovieSearch';

test('Renderiza o campo de pesquisa', () => {
  const { getByLabelText } = render(<MovieSearch onSearch={() => {}} />);
  expect(getByLabelText('Pesquisar vencedores por ano:')).toBeInTheDocument();
});

test('Chama a função de pesquisa ao clicar no botão', () => {
  const onSearch = jest.fn();
  const { getByLabelText, getByText } = render(<MovieSearch onSearch={onSearch} />);
  const pesquisaInput = getByLabelText('Pesquisar vencedores por ano:');
  const botaoPesquisa = getByText('Pesquisar');

  fireEvent.change(pesquisaInput, { target: { value: '2022' } });
  fireEvent.click(botaoPesquisa);

  expect(onSearch).toHaveBeenCalledWith('2022');
});
