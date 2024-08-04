/* 509. Fibonacci Number
Acceptance Rate: 71.5% */

/* Test Case;
input: n = 2
Expected output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1. */

var fib = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

console.log(fib(2));
console.log(fib(10));
