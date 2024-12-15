/* 367. Valid Perfect Square
Acceptance Rate: 44.0% */

/* Test Case:
input: num = 16
Ecpected output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer. */

var isPerfectSquare = function (num) {
  let val = num ** 0.5;
  return val % 1 == 0 ? true : false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
