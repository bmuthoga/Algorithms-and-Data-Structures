// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// function reverse(str) {
//   let result = ''

//   for (let i = 0; i < str.length; i++) {
//     result = str[i] + result;
    
//   }

//   return result
// }

function reverse(str) {
  return str.split('').reduce((prevVal, currVal, idx, arr) => {
    return currVal + prevVal
  }, '')
}

// function reverse(str) {
//   let reversed = ''

//   for (const char of str) {
//     reversed = char + reversed
//   }

//   return reversed
// }

console.log(reverse('apple'))
console.log(reverse('hello'))
console.log(reverse('Greetings!'))
console.log(reverse('abcd   '))
console.log(reverse('    abcd'))
