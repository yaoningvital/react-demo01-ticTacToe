import React from 'react'

function Square (props) {
  let className = 'square'
  if (props.red) {
    className += ' red'
  }
  return (
    <button
      className={className}
      onClick={() => props.handleClick(props.index)}
    >
      {props.value}
    </button>
  );
}

export default Square