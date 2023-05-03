import React from 'react';
import ScreenButton from './ScreenButton';
import '../styles/Board.css';

class Board extends React.Component {
  renderScreen(index) {
    return (
      <ScreenButton
        value={this.props.squares[index]}
        onClick={() => this.props.onClick(index)}
      />
    );
  }

  render() {
    return (
      <div className="squares-row">
        <div className="row">
          {this.renderScreen(0)}
          {this.renderScreen(1)}
          {this.renderScreen(2)}
        </div>
        <div className="row">
          {this.renderScreen(3)}
          {this.renderScreen(4)}
          {this.renderScreen(5)}
        </div>
        <div className="row">
          {this.renderScreen(6)}
          {this.renderScreen(7)}
          {this.renderScreen(8)}
        </div>
      </div>
    );
  }
}

export default Board;
