/* 153. Find Minimum in Rotated Sorted Array
Acceptance Rate: 51.3% */

/* Test Case:
Input: nums = [3,4,5,1,2]
Output: 1 */

var findMin = function (nums) {
  return Math.min(...nums);
};

console.log(findMin([3, 4, 5, 1, 2]));
