/* 1492. The Kth Factor of n
Acceptance Rate: 68.7% */

/* Test Case:
Input: n = 12, k = 3
Output: 3
Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3. */

var kThFactor = function (n, k) {
  arr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr.length < k ? -1 : arr[k - 1];
};

console.log(kThFactor(12, 3));
console.log(kThFactor(7, 2));
