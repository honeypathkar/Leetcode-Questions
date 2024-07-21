/* 43. Multiply Strings
Acceptance Rate: 40.7% */

/* Test case:
input: num1 = "2", num2 = "3"
Expected output: "6" */

var multiply = function (num1, num2) {
  let res = BigInt(num1) * BigInt(num2);
  return res.toString();
};

console.log(multiply("2", "3"));
console.log(multiply("123", "456"));
