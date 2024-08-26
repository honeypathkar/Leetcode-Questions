/* 1913. Maximum Product Difference Between Two Pairs
Acceptance Rate: 82.9% */

/* Test Case:
input: nums = [5,6,2,7,4]
Expected output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34. */

var maxProductDifference = function (nums) {
  let max1 = Math.max(...nums);
  nums.splice(nums.indexOf(max1), 1);
  let max2 = Math.max(...nums);
  nums.splice(nums.indexOf(max2), 1);
  let min1 = Math.min(...nums);
  nums.splice(nums.indexOf(min1), 1);
  let min2 = Math.min(...nums);
  nums.splice(nums.indexOf(min2), 1);
  return max1 * max2 - min1 * min2;
};

console.log(maxProductDifference([5, 6, 2, 7, 4]));
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));
