// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* Using array.every()
 * Not an ideal solution, but good for demonstration purposes
*/
function palindrome(str) {
  return str.split('').every((letter, index) => letter === str[str.length - 1 - index])
}

module.exports = palindrome;

/* Using array.reduce() */
// function palindrome(str) {
//   return str.split('').reduce((reversedString, letter) => letter + reversedString) === str
// }

/* Can also use other solutions from reversestring then compare to return boolean result */
