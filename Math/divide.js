/* 29. Divide Two Integers
Acceptance Rate: 17.8% */

/* Test Case:
input: dividend = 10, divisor = 3
Expected output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3. */

var divide = function (dividend, divisor) {
  if (dividend === -2147483647 && divisor === -1) {
    return 2147483647;
  }
  let ans = Math.trunc(dividend / divisor);
  return ans;
};

console.log(divide(10, 3));
console.log(divide(7, -3));
