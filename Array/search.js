/* 33. Search in Rotated Sorted Array
Acceptance Rate: 41.8% */

/* Test Case:
input: nums = [4,5,6,7,0,1,2], target = 0
Expected output: 4
Explanation: If target is found we have to return it's index */

var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
