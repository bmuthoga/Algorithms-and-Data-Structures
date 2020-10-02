/*
  n===4
  [[1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7]]

  [[1,   2,  3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10,  9,  8, 7]]
  */

function matrix(n) {
  const container = [];
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let counter = 1;

  for (let i = 0; i < n; i++) {
    container.push([]);
  }

  while (startCol <= endCol && startRow <= endRow) {
    // top row
    for (let i = startCol; i <= endCol; i++) {
      container[startRow][i] = counter;
      ++counter;
    }

    // right column across rows
    ++startRow;

    for (let i = startRow; i <= endRow; i++) {
      container[i][endCol] = counter;
      ++counter;
    }

    // bottom row
    --endCol;

    for (let i = endCol; i >= startCol; i--) {
      container[endRow][i] = counter;
      ++counter;
    }

    // first column
    --endRow;

    for (let i = endRow; i >= startRow; i--) {
      container[i][startCol] = counter;
      ++counter;
    }

    ++startCol; // process repeats after that
  }

  return container;
}

// function matrix(n) {
//   const container = [];
//   let startRow = 0;
//   let endRow = n - 1;
//   let startCol = 0;
//   let endCol = n - 1;
//   let counter

//   for (let i = 0; i < n; i++) {
//     container.push([]);
//   }

//   for (let i = 1; i <= n; i++) {
//     container[startRow][i] = i
//   }

//   ++startRow
//   counter = i
//   console.log('i: ', i)

//   while(startRow < n) {
//     container[startRow][endCol] = counter
//     ++counter

//     ++startRow
//   }

//   --startRow

//   for (let i = endCol - 1; i >= startCol; i--) {
//     container[startRow][i] = counter
//     ++counter
//   }

//   --startRow

// }

console.log(matrix(2));
console.log(matrix(3));
console.log(matrix(4));
