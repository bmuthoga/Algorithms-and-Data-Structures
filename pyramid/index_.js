// function pyramid(n, row = 0, str = "") {
//   if (row === n) {
//     return;
//   }

//   if (str.length === n * 2 - 1) {
//     console.log(str);
//     return pyramid(n, ++row);
//   }

//   if (
//     str.length >= Math.floor((n * 2 - 1) / 2) - row &&
//     str.length <= Math.floor((n * 2 - 1) / 2) + row
//   ) {
//     str += "#";
//   } else {
//     str += " ";
//   }

//   pyramid(n, row, str);
// }

function pyramid(n) {
  let midpoint = Math.floor((n * 2 - 1) / 2);

  for (let row = 0; row < n; row++) {
    let str = "";

    for (let col = 0; col <= n * 2 - 2; col++) {
      if (col <= midpoint + row && col >= midpoint - row) {
        str += "#";
      } else {
        str += "_";
      }
    }

    console.log(str);
  }
}

pyramid(1);
console.log("--------");
pyramid(2);
console.log("--------");
pyramid(3);
console.log("--------");
pyramid(4);
