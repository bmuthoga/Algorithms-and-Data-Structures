// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunkedArray = []
  let index = 0

  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size))

    index += size
  }

  return chunkedArray
}

module.exports = chunk;

/* Another solution */
// function chunk(array, size) {
//   let chunkedArray = []
//   let stopPosition = size

//   for (let i = 0; i < array.length; i += size) {
//     chunkedArray.push(array.slice(i, stopPosition))

//     stopPosition = stopPosition + size
//   }

//   return chunkedArray
// }

/* Another solution */
// function chunk(array, size) {
//   let chunkedArray = []

//   for (let element of array) {
//     if (!chunkedArray[chunkedArray.length - 1] || chunkedArray[chunkedArray.length - 1].length === size) {
//       chunkedArray.push([element])
//     } else {
//       chunkedArray[chunkedArray.length - 1].push(element)
//     }
//   }

//   return chunkedArray
// }

/* Another solution */
// function chunk(array, size) {
//   let chunkedArray = []

//   for (let element of array) {
//     if (chunkedArray[chunkedArray.length - 1] && chunkedArray[chunkedArray.length - 1].length < size) {
//       chunkedArray[chunkedArray.length - 1].push(element)
//     } else {
//       chunkedArray.push([element])
//     }
//   }

//   return chunkedArray
// }
