function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 2) + fibonacci(n - 1)
}
//memoization function for recursive function (Remembers only the very first argument with which the function was called)
function memo(f) {
  const recursionMap = new Map();
  return function (n) {
    if (!recursionMap.has(n)) {
      let res = f(n);
      recursionMap.set(n, res)
    }
    return recursionMap.get(n)
  }
}
const memoizFib = memo(fibonacci);

//memoization for a recursive fibonacci function (remembers all argument with which the function was called)
function memoFib() {
  const map = new Map()
  return function fibonacci(n) {
    if (!map.has(n)) {
      let res = n <= 1 ? n : fibonacci(n - 2) + fibonacci(n - 1)
      map.set(n, res)
    }
    return map.get(n)
  }
}
const fib = memoFib();


