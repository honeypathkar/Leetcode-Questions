/* 67. Add Binary
Acceptance Rate: 54.0% */

/* Test Case:
input: a = "11", b = "1"
Expected output: "100"
Explanation: /decimal representation of 11 is 3 and 1 is 1 so 3 + 1 = 4 and binary representation of 4 is 100 so the answer is 100 */

var addBinary = function (a, b) {
  let val1 = BigInt(`0b${a}`);
  let val2 = BigInt(`0b${b}`);
  let ans = val1 + val2;
  return ans.toString(2);
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
