function chunk(arr, size) {
  const result = [];

  // for (let i = 0; i < arr.length; i += size) {
  //   result.push(arr.slice(i, i + size));
  // }

  // let i = 0;

  // while (i < arr.length) {
  //   result.push(arr.slice(i, i + size));
  //   i += size;
  // }

  // return result;

  for (let i = 0; i < arr.length; i++) {
    if (result.length === 0 || result[result.length - 1].length === size) {
      result.push([arr[i]]);
    } else {
      result[result.length - 1].push(arr[i]);
    }
  }
  return result;
}

console.log(chunk([1, 2, 3, 4], 2)); // --> [[ 1, 2], [3, 4]]
console.log("--------");
console.log(chunk([1, 2, 3, 4, 5], 2)); // --> [[ 1, 2], [3, 4], [5]]
console.log("--------");
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
console.log("--------");
console.log(chunk([1, 2, 3, 4, 5], 4)); // --> [[ 1, 2, 3, 4], [5]]
console.log("--------");
console.log(chunk([1, 2, 3, 4, 5], 10)); // --> [[ 1, 2, 3, 4, 5]]
console.log("--------");
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log("--------");
console.log(chunk([1, 2, 3], 1));
console.log("--------");
console.log(chunk([1, 2, 3, 4, 5], 3));
console.log("--------");
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));

//length === 0 || length of last arr === size
// push array

// else
////iterate over each array
// push elem
