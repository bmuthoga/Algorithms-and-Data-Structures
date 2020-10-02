function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfLeast = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfLeast]) {
      }
    }
  }
}

console.log(selection([100, -40, 500, -124, 0, 21, 7]));
