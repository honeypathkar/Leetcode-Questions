/* 1486. XOR Operation in an Array
Acceptance Rate: 86.5% */

/* Test Case:
input: n = 5, start = 0
Expected output: 8
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator. */

var xorOperation = function (n, start) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    res ^= start + 2 * i;
  }
  return res;
};

console.log(xorOperation(5, 0));
console.log(xorOperation(4, 3));
