/* 414. Third Maximum Number
Acceptance Rate: 35.6% */

/* Test Case:
input: nums = [2,2,3,1]
Expected output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1. */

var thirdMax = function (nums) {
  nums = [...new Set(nums)];
  nums.sort((a, b) => b - a);

  if (nums.length < 3) {
    return nums[0];
  }
  return nums[2];
};

console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1, 2]));
