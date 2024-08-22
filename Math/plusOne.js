/* 66. Plus One
Acceptance Rate: 46.0% */

/* Test Case:
input: digits = [1,2,3]
Expected output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4]. */

var plusOne = function (digits) {
  let arr = digits.join("");
  let addOne = BigInt(arr) + BigInt(1);
  let res = addOne.toString().split("").map(Number);
  return res;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
