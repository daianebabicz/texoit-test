import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieFilter from '../MovieFilter';

test('Renderiza os campos de filtro', () => {
  const { getByLabelText } = render(<MovieFilter onFilterChange={() => {}} />);
  expect(getByLabelText('Ano')).toBeInTheDocument();
  expect(getByLabelText('Vencedor')).toBeInTheDocument();
});

test('Chama a função de filtro ao alterar os campos', () => {
  const onFilterChange = jest.fn();
  const { getByLabelText } = render(<MovieFilter onFilterChange={onFilterChange} />);
  const anoInput = getByLabelText('Ano');
  const vencedorSelect = getByLabelText('Vencedor');

  fireEvent.change(anoInput, { target: { value: '2022' } });
  fireEvent.change(vencedorSelect, { target: { value: 'true' } });

  expect(onFilterChange).toHaveBeenCalledWith({ year: '2022', winner: 'true' });
});
