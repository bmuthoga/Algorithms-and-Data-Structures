// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return sanitiseString(stringA) === sanitiseString(stringB)
}

function sanitiseString(str) {
  return str
    .replace(/\W/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

module.exports = anagrams;

/* Another solution */
// function anagrams(stringA, stringB) {
//   const charMapA = stringCharMap(stringA)
//   const charMapB = stringCharMap(stringB)

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false
//   }

//   for (let letter in charMapA) {
//     if (!charMapB[letter] || charMapB[letter] !== charMapA[letter]) {
//       return false
//     }
//   }

//   return true
// }

// const stringCharMap = str => {
//   const sanitisedString = str.replace(/\W/g, '').toLowerCase()
//   const charMap = {}

//   for (let letter of sanitisedString) {
//     charMap[letter] = ++charMap[letter] || 1
//   }

//   return charMap
// }

/* Another solution */
// function anagrams(stringA, stringB) {
//   const sanitisedStringA = stringA.replace(/\W/g, '').toLowerCase()
//   const sanitisedStringB = stringB.replace(/\W/g, '').toLowerCase()

//   if (sanitisedStringA.length !== sanitisedStringB.length) {
//     return false
//   }

//   const charMapA = {}
//   const charMapB = {}

//   for (let letter of sanitisedStringA) {
//     charMapA[letter] = ++charMapA[letter] || 1
//   }

//   for (let letter of sanitisedStringB) {
//     charMapB[letter] = ++charMapB[letter] || 1
//   }

//   let isAnagram = false

//   for (let letter in charMapA) {
//     isAnagram = charMapB[letter] && charMapA[letter] === charMapB[letter]
//   }

//   return isAnagram
// }
