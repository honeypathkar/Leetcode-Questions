/* 1137. N-th Tribonacci Number
Acceptance Rate: 63.7% */

/* Test Case:
input: n = 4
Expected output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4 */

var tribonacci = function (n, memo = {}) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else if (n === 3) {
    return 2;
  } else if (memo[n]) {
    return memo[n];
  } else {
    memo[n] =
      tribonacci(n - 1, memo) +
      tribonacci(n - 2, memo) +
      tribonacci(n - 3, memo);
    return memo[n];
  }
};

console.log(tribonacci(4));
console.log(tribonacci(25));
