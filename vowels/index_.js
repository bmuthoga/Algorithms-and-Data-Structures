// function vowels(str) {
//   let max = 0;

//   for (let char of str.toLowerCase()) {
//     if (["a", "e", "i", "o", "u"].includes(char)) {
//       ++max;
//     }
//   }

//   return max;
// }

function vowels(str) {
  let matched = str.match(/[aeiou]/gi);

  return matched ? matched.length : 0;
}

console.log(vowels("Hi There!")); // --> 3
console.log(vowels("Why do you ask?")); // --> 4
console.log(vowels("Why?")); // --> 0
console.log(vowels("aeiou"));
console.log(vowels("AEIOU"));
console.log(vowels("abcdefghijklmnopqrstuvwxyz"));
console.log(vowels("bcdfghjkl"));
