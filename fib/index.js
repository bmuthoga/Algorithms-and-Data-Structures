// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/* Memoized Recursive Solution */
/* This improves runtime complexity of below */
function slowFib(n) {
  if (n === 0 || n === 1) return n

  return fib(n - 1) + fib(n - 2)
}

function memoize(fn) {
  const cache = {}

  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result

    return result
  }
}

const fib = memoize(slowFib)

module.exports = fib;

/* Recursive Solution */
/* Runtime complexity is O(2^n); this is not good */
// function fib(n) {
//   if (n === 0 || n === 1) return n

//   return fib(n - 1) + fib(n - 2)
// }


/* Iterative Solution */
/* Runtime complexity is linear, O(n); this is much better than previous */
// function fib(n) {
//   if (n === 0 || n === 1) return n

//   const fibArray = [ 0, 1 ]

//   for (let i = 2; i <= n; i++) {
//     fibArray.push(fibArray[i - 2] + fibArray[i - 1])
//   }

//   return fibArray[fibArray.length - 1] // or fibArray[n]
// }
