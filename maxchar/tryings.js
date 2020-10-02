function maxChar(str) {
  let max = null;
  let maxChar = "";
  const charMap = {};
  let strArr = str.split("");

  strArr.forEach((letter) => {
    if (charMap[letter]) {
      charMap[letter]++;
    } else {
      charMap[letter] = 1;
    }

    if (charMap[letter] > max) {
      max = charMap[letter];
      maxChar = letter;
    }
  });
  return maxChar;
}
