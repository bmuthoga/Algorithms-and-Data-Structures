// Print string repeatedly horizontally
// function repeatStringHorizontally(str, times, counter = 0, line = "") {
//   if (counter === times) {
//     return;
//   }

//   if (line.length === times) {
//     console.log(line);
//     return repeatStringHorizontally(str, times, ++counter);
//   }

//   line += str;
//   return repeatStringHorizontally(str, times, counter, line);
// }

// repeatStringHorizontally("b", 5);

// Print string repeatedly horizontally simple version
function repeatStringHorizontallySimple(str, times, line = "") {
  if (line.length === times) {
    return console.log(line);
  }

  line += str;
  return repeatStringHorizontallySimple(str, times, line);
}

repeatStringHorizontallySimple("b", 5);
