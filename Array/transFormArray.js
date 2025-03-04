/* 3467. Transform Array by Parity
Acceptance Rate: 87.9% */

/* Test Case:
input: nums = [4,3,2,1]
Expecred output: [0,0,1,1]
Explanation:
 - Replace the even numbers (4 and 2) with 0 and the odd numbers (3 and 1) with 1. Now, nums = [0, 1, 0, 1].
 - After sorting nums in non-descending order, nums = [0, 0, 1, 1]. */

var transformArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      nums[i] = 0;
    } else if (nums[i] % 2 != 0) {
      nums[i] = 1;
    }
  }
  return nums.sort();
};

console.log(transformArray([4, 3, 2, 1]));
console.log(transformArray([2, 4, 6, 8]));
