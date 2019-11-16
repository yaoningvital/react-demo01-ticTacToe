import React from 'react'
import Square from './Square'

class Board extends React.Component {
  render () {
    let arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
    let [a, b, c] = this.props.winIndices || []
    
    
    return (
      <div>
        {arr.map((subArr, index) => {
          return (
            <div className="board-row" key={index}>
              {subArr.map((item, subIndex) => {
                return <Square
                  value={this.props.squares[item]}
                  index={item}
                  red={[a, b, c].includes(item)}
                  key={item}
                  handleClick={this.props.handleClick}
                />
              })}
            </div>
          )
        })}
      </div>
    );
  }
  
}

export default Board