function maxChar(str) {
  let charMap = {};
  let max = 0;
  let result = "";

  // for(const char of str) {
  //   if (charMap.hasOwnProperty(char)) {
  //     charMap[char] = charMap[char] + 1
  //   } else {
  //     charMap[char] = 1
  //   }
  // }

  for (const char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }

  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      result = char;
    }
  }

  // Object.keys(charMap).map((char) => {
  //   if (charMap[char] > max) {
  //     max = charMap[char];
  //     result = char;
  //   }
  // });

  return result;
}

console.log(maxChar("a"));
console.log(maxChar("abcdefghijklmnaaaaa"));
console.log(maxChar("ab1c1d1e1f1g1"));
console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));
