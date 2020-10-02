// function reverseInt(n) {
//   const reversedArr = n.toString().split('').reverse()

//   if (reversedArr[reversedArr.length - 1] === '-') {
//     reversedArr.splice(-1, 1)

//     return Number.parseInt(reversedArr.join('')) * -1
//   }

//   return Number.parseInt(reversedArr.join(''))
// }

function reverseInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

console.log(reverseInt(0))
console.log(reverseInt(5))
console.log(reverseInt(15))
console.log(reverseInt(90))
console.log(reverseInt(2359))
console.log(reverseInt(981))
console.log(reverseInt(500))
console.log(reverseInt(-0))
console.log(reverseInt(-5))
console.log(reverseInt(-15))
console.log(reverseInt(-90))
console.log(reverseInt(-2359))
console.log(reverseInt(-981))
console.log(reverseInt(-500))

console.log(0 === -0)
