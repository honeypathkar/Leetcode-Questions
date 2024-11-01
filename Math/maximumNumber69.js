/* 1323. Maximum 69 Number
Acceptance Rate: 82.5% */

/* Test Case:
Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969. */

var maximum69number = function (num) {
  return +String(num).replace("6", "9");
};

console.log(maximum69number(9669));
console.log(maximum69number(9996));
