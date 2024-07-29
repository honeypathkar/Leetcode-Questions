/* 70. Climbing Stairs
Acceptance Rate: 53.0% */

/* Test case:
input: n = 3
Expected output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step */

var climbStairs = function (n) {
  let steps = [1, 2];
  for (let i = 2; i < n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n - 1];
};

console.log(climbStairs(3));
console.log(climbStairs(10));
