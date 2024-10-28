/* 2413. Smallest Even Multiple
Acceptance Rate: 88.0% */

/* Test Case:
input: n = 5
Expected output: 10
Explanation: The smallest multiple of both 5 and 2 is 10. */

var smallestEvenMultiple = function (n) {
  let multiple = n;
  if (multiple % 2 !== 0) {
    multiple += n;
  }
  return multiple;
};

console.log(smallestEvenMultiple(5));
console.log(smallestEvenMultiple(7));
