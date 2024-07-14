/* 2894. Divisible and Non-divisible Sums Difference
Acceptance Rate: 89.0% */

/* Test Case: 
input: n = 10, m = 3
Expected output: 19
Explanation: In the given example:
- Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
- Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
We return 37 - 18 = 19 as the answer. */

var differenceOfSums = function (n, m) {
  let divisible = [];
  let nonDivisible = [];
  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      divisible.push(i);
    } else {
      nonDivisible.push(i);
    }
  }
  let sum1 = nonDivisible.reduce((acc, curr) => acc + curr, 0);
  let sum2 = divisible.reduce((acc, curr) => acc + curr, 0);

  return sum1 - sum2;
};

console.log(differenceOfSums(10, 3));
console.log(differenceOfSums(5, 6));
