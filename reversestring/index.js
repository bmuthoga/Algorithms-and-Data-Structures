// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* Using array.reduce() */
function reverse(str) {
  return str
    .split('')
    .reduce((reversedString, letter) => letter + reversedString, '')
}

module.exports = reverse;

/* Using array.reverse() */
// function reverse(str) {
  // return str
  //   .split('')
  //   .reverse()
  //   .join('')
// }

/* Using new 'for...of' loop */
// function reverse(str) {
//   let reversedString = ''

//   for (const letter of str) {
//     reversedString = letter + reversedString
//   }

//   return reversedString
// }

/* Using old for loop */
// function reverse(str) {
//   let reversedString = ''

//   for (let i = str.length; i > 0; i--) {
//     reversedString += str.charAt(i - 1)
//   }

//   return reversedString
// }
