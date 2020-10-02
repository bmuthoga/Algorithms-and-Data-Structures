// function fib(n) {
//   if (n === 0 || n === 1) return n;

//   // let fibArr = []

//   // for (let i = 0; i <= n; i++) {

//   // }

//   return fib(n - 2) + fib(n - 1);
// }

function unmemoizedFib(n) {
  if (n === 0 || n === 1) return n;

  return fib(n - 2) + fib(n - 1);
}

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

const fib = memoize(unmemoizedFib);

console.log(fib(0));
console.log("-----------");
console.log(fib(1));
console.log("-----------");
console.log(fib(2));
console.log("-----------");
console.log(fib(3));
console.log("-----------");
console.log(fib(4));
console.log("-----------");
console.log(fib(15));
console.log("-----------");
console.log(fib(39));
