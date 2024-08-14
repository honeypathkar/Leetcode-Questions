/* 2176. Count Equal and Divisible Pairs in an Array
Acceptance Rate: 79.6% */

/* Test Case:
input: nums = [3,1,2,2,2,1,3], k = 2
Expected output: 4
Explanation:
There are 4 pairs that meet all the requirements:
- nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
- nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
- nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
- nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2. */

var countEqualPairs = function (nums, k) {
  let count = 0;
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++;
      }
    }
  }
  return count;
};

console.log(countEqualPairs([3, 1, 2, 2, 2, 1, 3], 2));
console.log(countEqualPairs([1, 2, 3, 4], 1));
