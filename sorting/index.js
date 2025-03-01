// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let smaller = arr[j + 1]

        arr[j + 1] = arr[j]
        arr[j] = smaller
      }
    }
  }

  return arr
}

/* Using Prove-Me-Wrong Approach */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfLeast = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfLeast]) {
        indexOfLeast = j
      }
    }

    if (i !== indexOfLeast) {
      let smallerElementFound = arr[indexOfLeast]
      let currentElement = arr[i]

      arr[i] = smallerElementFound
      arr[indexOfLeast] = currentElement
    }
  }

  return arr
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)
  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  
  return [ ...result, ...left, ...right ]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

/* Another Solution */
// function selectionSort(arr) {
//   for (let i = arr.length - 1; i > -1; i--) {
//     for (let j = arr.length - 1; j >= arr.length - 1 - i; j--) {
//       if (arr[j] < arr[j - 1]) {
//         let smaller = arr[j]
//         let greater = arr[j - 1]

//         arr[j] = greater
//         arr[j - 1] = smaller
//       }
//     }
//   }

//   return arr
// }
