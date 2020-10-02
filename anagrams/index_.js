function anagrams(strA, strB) {
  const sanitizedA = sanitize(strA);
  const sanitizedB = sanitize(strB);

  if (sanitizedA.length !== sanitizedB.length) {
    return false;
  }

  return (
    sanitizedA.split("").sort().join("") ===
    sanitizedB.split("").sort().join("")
  );
}

// function anagrams(strA, strB) {
//   const sanitizedA = sanitize(strA);
//   const sanitizedB = sanitize(strB);

//   if (sanitizedA.length !== sanitizedB.length) {
//     return false;
//   }

//   const charA = generateCharMap(sanitizedA);
//   const charB = generateCharMap(sanitizedB);

//   if (Object.keys(charA).length !== Object.keys(charB).length) {
//     return false;
//   }

//   for (let char in charA) {
//     if (!charB[char] || charB[char] !== charA[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function generateCharMap(str) {
//   const charMap = {};

//   for (let letter of str) {
//     charMap[letter] = ++charMap[letter] || 1;
//   }

//   return charMap;
// }

function sanitize(str) {
  return str.replace(/\W/gi, "").toLowerCase();
}

console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("Hi there", "Bye there"));
console.log(anagrams("hello", "llohe"));
console.log(anagrams("Whoa! Hi!", "Hi! Whoa!"));
console.log(anagrams("One One", "Two two two"));
console.log(anagrams("One one", "One one c"));
console.log(anagrams("A tree, a life, a bench", "A tree, a fence, a yard"));
