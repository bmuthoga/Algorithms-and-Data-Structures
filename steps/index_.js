function steps(n) {
  for (let row = 0; row < n; row++) {
    let str = "";

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        str += "#";
      } else {
        str += " ";
      }
    }

    console.log(str);
  }
}

// function steps(n, row = 0, str = "") {
//   if (row === n) {
//     return;
//   }

//   if (str.length === n) {
//     console.log(str);

//     return steps(n, ++row);
//   }

//   if (str.length <= row) {
//     str += "#";
//   } else {
//     str += " ";
//   }

//   steps(n, row, str);
// }

steps(1);
console.log("-------");
steps(2);
console.log("-------");
steps(3);
console.log("-------");
steps(4);
