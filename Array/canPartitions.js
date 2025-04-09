/* 416. Partition Equal Subset Sum
Acceptance Rate: 48.2% */

/* Test Case:
input: nums = [1,5,11,5]
Expected output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
 */

var canPartition = function (nums) {
  let total = nums.reduce((acc, curr) => acc + curr, 0);

  if (total % 2 !== 0) return false;

  let target = total / 2;
  let dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[target];
};

console.log(canPartition([1, 5, 11, 5])); // true
