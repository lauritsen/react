import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button
      className='square'
      onClick={props.onClick}
      style={props.highlight ? { backgroundColor: 'lightgray' } : {}}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    const highlight = this.props.result?.line.indexOf(i) >= 0;

    return (
      <Square
        key={'square' + i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        highlight={highlight}
      />
    );
  }

  renderRows() {
    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    const boardRows = rows.map((row, index) => {
      const squares = row.map((square) => this.renderSquare(square));
      return (
        <div className='board-row' key={'row' + index}>
          {squares}
        </div>
      );
    });

    return <div>{boardRows}</div>;
  }

  render() {
    return this.renderRows();
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          moveSquareId: null,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      historyDescending: false,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares,
          moveSquareId: i,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  toggleHistoryDirection() {
    this.setState({
      historyDescending: !this.state.historyDescending,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const result = calculateWinner(current.squares);

    const moves = history
      .map((step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        const cols = 3;
        const col = (step.moveSquareId % cols) + 1;
        const row = Math.floor(step.moveSquareId / cols) + 1;
        const moveDesc = move ? 'col: ' + col + ', row: ' + row : '';
        const style =
          this.state.stepNumber === move ? { fontWeight: 'bold' } : {};
        return (
          <li key={move} style={style}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
            <p>{moveDesc}</p>
          </li>
        );
      })
      .sort((a, b) => {
        if (this.state.historyDescending) {
          return b.key - a.key;
        } else {
          return a.key - b.key;
        }
      });

    let status;
    if (result) {
      status = 'Winner: ' + result.winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            squares={current.squares}
            result={result}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <button onClick={() => this.toggleHistoryDirection()}>
            Toggle history direction
          </button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
