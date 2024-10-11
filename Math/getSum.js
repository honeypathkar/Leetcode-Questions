/* 371. Sum of Two Integers
Acceptance Rate: 52.6% */

/* Test Case:
input: a = 1, b = 2
Expected output: 3
Explanation: Sum of 1 and 2 is 3. 
Condition: return the sum of the two integers without using the operators + and -.*/

var getSum = function (a, b) {
  if (b == 0) {
    return a;
  } else {
    return getSum(a ^ b, (a & b) << 1);
  }
};

console.log(getSum(1, 2));
console.log(getSum(5, 3));
