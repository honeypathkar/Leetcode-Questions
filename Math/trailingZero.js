/* 172. Factorial Trailing Zeros 
Acceptance Rate: 43.9% */

/* Test Case:
input: n = 5
Expected output: 1
Explanation: 5! = 120, one trailing zero. */

var trailingZeroes = function (n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};

console.log(trailingZeroes(5));
console.log(trailingZeroes(20));
