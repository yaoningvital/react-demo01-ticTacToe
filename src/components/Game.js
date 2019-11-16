import React from 'react'
import Board from './Board'
import { calculateWinner } from '../utils'

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        }
      ],
      // xIsNext: true,
      currentStep: 0  // 当前正在第几步
    }
  }
  
  render () {
    let history = this.state.history
    let current = history[this.state.currentStep]
    
    let winnerObj = calculateWinner(current.squares)
    let status = ''
    let winIndices;
    if (winnerObj) {
      status = 'The winner is: ' + winnerObj.winner
      winIndices = winnerObj.indices
    } else {
      status = 'Next player: ' + (this.state.currentStep % 2 === 0 ? 'X' : 'O');
    }
    
    let moves = history.map((step, move) => {
      let desc = move ? `回到第${move}步` : '重新开始'
      return <li key={move}>
        <button onClick={() => this.jumpTo(move)}>{desc}</button>
      </li>
    })
    
    
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winIndices={winIndices}
            handleClick={this.handleClick}/>
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
  
  
  handleClick (index) {
    let history = this.state.history
    let current = history[this.state.currentStep]
    let squares = current.squares.slice()
    
    // 有人胜出，或者该格已经放了棋，则返回
    if (calculateWinner(squares) || squares[index]) return
    
    squares[index] = this.state.currentStep % 2 === 0 ? 'X' : 'O'
    this.setState({
      history: history.slice(0, this.state.currentStep + 1).concat([{
        squares
      }]),
      // xIsNext: !this.state.xIsNext,
      currentStep: this.state.currentStep + 1
    })
  }
  
  jumpTo (move) {
    this.setState({
      currentStep: move
    })
  }
}

export default Game