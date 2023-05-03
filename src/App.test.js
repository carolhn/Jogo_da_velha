import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import Game from './pages/Game';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('Veirifcar se existe um titulo e uma informação renderizada', () => {
  render(<Game />);
  const title = screen.getByRole('heading', { name: /jogo da velha/i })
  const nextPlayer = screen.getByText(/próximo jogador: x/i)
  expect(nextPlayer).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
