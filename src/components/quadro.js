import React, { useContext } from 'react';
import Square from './Square';
import { GameContext } from '../contexts/GameContext';
import '../styles/Board.css';

function Quadro() {
  const { squares, handleClick } = useContext(GameContext);

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  }

  return (
    <div className="squares">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Quadro;
