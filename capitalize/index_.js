// function capitalize(str) {
//   let arr = str.split(" ");

//   arr.forEach((word, idx, array) => {
//     array[idx] = word[0].toUpperCase() + word.slice(1);
//   });

//   return arr.join(" ");
// }

// function capitalize(str) {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// }

function capitalize(str) {
  let result = [];

  for (let word of str.split(" ")) {
    result.push(`${word[0].toUpperCase()}${word.slice(1)}`);
  }

  return result.join(" ");
}

console.log(capitalize("hi there, how is it going?"));
console.log("---------");
console.log(capitalize("i love breakfast at bill miller bbq"));
console.log("---------");
console.log(capitalize("a short sentence"));
console.log("---------");
console.log(capitalize("a lazy fox"));
console.log("---------");
console.log(capitalize("look, it is working!"));
