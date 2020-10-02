// Print string repeatedly vertically
function repeatString(str, times, counter = 0) {
  if (counter === times) {
    return;
  }

  console.log(str);
  repeatString(str, times, ++counter);
}

repeatString("a", 5);
