/* 1685. Sum of Absolute Differences in a Sorted Array
Acceptance Rate: 68.2% */

/* Test Case:
input: nums = [2,3,5]
Expected output: [4,3,5]
Explanation: Assuming the arrays are 0-indexed, then
result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4,
result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3,
result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5. */

var getSumAbsoluteDifferences = function (nums) {
  let res = [];
  let prefixSum = 0;
  let suffixSum = nums.reduce((acc, curr) => acc + curr, 0);
  for (let i = 0; i < nums.length; i++) {
    let leftSum = nums[i] * i - prefixSum;
    let rightSum = suffixSum - nums[i] * (nums.length - i);
    let total = leftSum + rightSum;
    res.push(total);

    prefixSum += nums[i];
    suffixSum -= nums[i];
  }
  return res;
};

console.log(getSumAbsoluteDifferences([2, 3, 5]));
console.log(getSumAbsoluteDifferences([1, 4, 6, 8, 10]));
