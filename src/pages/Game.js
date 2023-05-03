import React from 'react';
import Board from '../components/Board';
import Winner from '../components/Winner';
import '../styles/Game.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      step: 0,
      next: true,
    };
  }

  handleClick(index) {
    const history = this.state.history.slice(0, this.state.step + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (Winner(squares) || squares[index]) {
      return;
    }

    squares[index] = this.state.next ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares: squares }]),
      step: history.length,
      next: !this.state.next,
    });
  }

  handleRestart() {
    this.setState({
      history: [{ squares: Array(9).fill(null) }],
      next: true,
      step: 0,
    });
  }

  render() {
    const current = this.state.history[this.state.history.length - 1];
    const winner = Winner(current.squares);
    const status = winner ? `Ganhador: ${winner}` : (current.squares.includes(null) ? `Próximo Jogador: ${this.state.next ? 'X' : 'O'}` : 'Empate!');
  
    return (
      <div>
        <h1 className="title">Jogo da Velha</h1>
        <div className="game-info">
          <div>{status}</div>
          {winner && (
          <button onClick={() => this.handleRestart()}>Reiniciar</button>
          )}
        </div>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
      </div>
      </div>
    );
  }
}  
export default Game;
