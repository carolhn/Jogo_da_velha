import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from '../page/Game';

test('Veirifcar se existe esses elementos na tela', () => {
  render(<Game />);
  const title = screen.getByRole('heading', { name: /jogo da velha/i })
  const nextPlayer = screen.getByText(/próximo jogador:/i)
  const playerX = screen.getByText(/x/i)
  const playerO = screen.getByText(/o/i)
  const button = screen.getByRole('button', { name: /reiniciar/i })

  expect(title).toBeInTheDocument();
  expect(nextPlayer).toBeInTheDocument();
  expect(playerX).toBeInTheDocument();
  expect(playerO).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});