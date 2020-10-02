// Print numbers from n to 1
function printNumber(n) {
  if (n === 0) {
    return;
  }

  console.log(n);

  printNumber(n - 1);
}

printNumber(5);
