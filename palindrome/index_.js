// function palindrome(str) {
//   return str === str.split('').reduce((prevVal, currentVal, idx) => {
//     return currentVal + prevVal
//   }, '')
// }

function palindrome(str) {
  return str.split('')
    .every((char, idx) => char === str[str.length - 1 - idx])
}

console.log(palindrome('aba'))
console.log(palindrome('aba '))
console.log(palindrome(' aba'))
console.log(palindrome('greetings'))
console.log(palindrome('1000000001'))
console.log(palindrome('Fish hsif'))
console.log(palindrome('pennep'))
console.log(palindrome('abcdefg'))
