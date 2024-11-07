/* 342. Power of Four
Acceptance Rate: 48.6% */

/* Test Case:
input: n = 16
Expected output: true 
Explanation: If a number is power of four we will return true else false*/

var isPowerOfFour = function (n) {
  while (n > 1) {
    n = n / 4;
  }
  return n == 1;
};

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(8));
