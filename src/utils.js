export function calculateWinner (squares) {
  let colons = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  
  for (let i = 0; i < colons.length; i++) {
    let [a, b, c] = colons[i]
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return {
        winner: squares[a],
        indices: [a, b, c]
      }
    }
  }
  return null
}