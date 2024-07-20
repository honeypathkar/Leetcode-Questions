/* 263. Ugly Number
Acceptance Rate: 42.0% */

/* Text case:
input: n = 6
Exxpected output: true
Explanation: 6 = 2 × 3
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5. */

var isUgly = function (n) {
  if (n <= 0) return false;

  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else if (n % 3 === 0) {
      n /= 3;
    } else if (n % 5 === 0) {
      n /= 5;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isUgly(6)); //true
console.log(isUgly(14)); //false
