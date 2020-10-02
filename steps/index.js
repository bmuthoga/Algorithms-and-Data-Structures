// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/* Using Recursion */
function steps(n, row = 0, stair = "") {
  if (row === n) return;

  if (stair.length === n) {
    console.log(stair);

    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, row, stair);
}

module.exports = steps;

/* Another solution */
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = ''

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }

//     console.log(stair)
//   }
// }

/* Another solution */
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(characterString('#', i) + characterString(' ', n - i))
//   }
// }

// function characterString(char, count) {
//   let result = ''
//   let i = 0

//   while (i < count) {
//     result += char

//     i++
//   }

//   return result
// }

//=========================================
/* Random recursion exercises

// Print numbers from n to 1
function printNumber(n) {
  if (n === 0) return
  
  console.log(n)
  
  printNumber(n-1)
}

printNumber(5)

console.log('*****************')

// Print string repeatedly vertically
function repeatString(str, times, counter = 0){
  if (counter === times) {
    return
  }
  
  if (times === 1){
    console.log(str)
    return
  }
  
  console.log(str)
  repeatString(str, times, counter + 1)
}

repeatString('a', 5)

console.log('##################')

// Print string repeatedly horizontally
function repeatStringHorizontally(str, times, result = '') {
  if (result.length === times) {
    console.log(result)
    
    return
  }
  
  result = result + str
  
  repeatStringHorizontally(str, times, result)
}

repeatStringHorizontally('b', 5)

*/
