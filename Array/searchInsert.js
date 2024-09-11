/* 35. Search Insert Position
Acceptance Rate: 47.1% */

/* Test Case:
input: nums = [1,3,5,6], target = 5
Expected output: 2 */

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 7));
