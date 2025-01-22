/* 2864. Maximum Odd Binary Number
Acceptance Rate: 83.0% */

/* Test Case:
Input: s = "010"
Output: "001"
Explanation: Because there is just one '1', it must be in the last position. So the answer is "001". */

var maximumOddBinaryNumber = function (s) {
  s = s.split("").sort((a, b) => b - a);
  s.shift();
  s.push(1);
  return s.join("");
};

console.log(maximumOddBinaryNumber("010"));
console.log(maximumOddBinaryNumber("0101"));
