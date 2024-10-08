/* 2160. Minimum Sum of Four Digit Number After Splitting Digits
Acceptance Rate: 86.3% */

/* Test Case:
input: num = 2932
Expected output: 52
Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52. */

var minimumSum = function (num) {
  let str = num.toString().split("").sort();
  return parseInt(str[0] + str[2]) + parseInt(str[1] + str[3]);
};

console.log(minimumSum(2932));
console.log(minimumSum(4009));
