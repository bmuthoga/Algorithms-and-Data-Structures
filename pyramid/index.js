// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/* Recursive Solution */
function pyramid(n, row = 0, pyramidStep = '') {
  if (row === n) return

  if (pyramidStep.length === ((n * 2) - 1)) {
    console.log(pyramidStep)

    return pyramid(n, row + 1)
  }

  const midPoint = Math.floor(((n * 2) - 1) / 2)

  if (pyramidStep.length === midPoint || ((pyramidStep.length >= midPoint - row) && (pyramidStep.length <= midPoint + row)) ) {
    pyramidStep += '#'
  } else {
    pyramidStep += ' '
  }

  pyramid(n, row, pyramidStep)
}

module.exports = pyramid;

/* Non-recursive Solution */
// function pyramid(n) {
//   const midPoint = Math.floor(((2 * n) - 1 )/ 2)

//   for (let row = 0; row < n; row++) {
//     let pyramidStep = ''

//     for (let column = 0; column <= ((n * 2) - 2); column++) {
//       if (column === midPoint || (column >= midPoint - row && column <= midPoint + row)) {
//         pyramidStep += '#'
//       } else {
//         pyramidStep += ' '
//       }
//     }

//     console.log(pyramidStep)
//   }
// }
