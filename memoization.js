function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 2) + fibonacci(n - 1)
}

function memo(f) {
  const reccursionMap = new Map();
  return function (n) {
    if (!reccursionMap.has(n)) {
      let res = f(n);
      reccursionMap.set(n, res)
    }
    return reccursionMap.get(n)
  }
}

const fibMemo = memo(fibonacci);
