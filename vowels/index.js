// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowelsPresent = str.match(/[aeiou]/gi)

  return vowelsPresent ? vowelsPresent.length : 0
}

module.exports = vowels;

/* Another Solution */
// function vowels(str) {
//   const vowels = [ 'a', 'e', 'i', 'o', 'u' ]
//   let counter = 0

//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) counter++
//   }

//   return counter
// }
