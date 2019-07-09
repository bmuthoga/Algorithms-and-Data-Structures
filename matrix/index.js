// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const containerArray = []

  for (let i = 0; i < n; i++) {
    containerArray.push([])
  }

  // e.g. n = 4

  let startColumn = 0
  let endColumn = n - 1 // 3 now 2
  let startRow = 0 // now 1
  let endRow = n - 1 // 3 now 2

  let count = 1

  while (startColumn <= endColumn && startRow <= endRow) {
    // top row
    for (let i = startColumn; i <= endColumn; i++) { // i = 0 - 3
      containerArray[startRow][i] = count
      count++ // top row = 1, 2, 3, 4
    }
    startRow++ // 0 + 1 = 1

    // right column
    for (let i = startRow; i <= endRow; i++) {// i = 1 - 3
      containerArray[i][endColumn] = count
      count++ // right column = 5, 6, 7
    }
    endColumn-- // 3 - 1 = 2

    // bottom row
    for (let i = endColumn; i >= startColumn; i--) { // i = 2 - 0
      containerArray[endRow][i] = count
      count++ // bottom row = 10, 9, 8
    }
    endRow-- // 3 - 1 = 2

    // left column
    for (let i = endRow; i >= startRow; i--) { // i = 2 - 1
      containerArray[i][startColumn] = count
      count++ // left column = 11, 12 from bottom going up
    }
    startColumn++ // 0 + 1 = 1 basically to have the process repeat from row 1, col 1
  }

  return containerArray
}

module.exports = matrix;
