/* 628. Maximum Product of Three Numbers
Accepatance Rate: 45.2% */

/* Test Case:
Input: nums = [1,2,3]
Output: 6 */

var maximumProduct = function (nums) {
  nums.sort((a, b) => b - a);
  let n = nums.length;
  let value1 = nums[0] * nums[1] * nums[2];
  let value2 = nums[0] * nums[n - 1] * nums[n - 2];
  return value1 > value2 ? value1 : value2;
};

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([-1, -2, -3]));
