/* 1. Two Sum
Acceptance Rate: 53.1% */

/* Test case: 
input: nums = [2,7,11,15], target = 9
Expected output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]
console.log(twoSum([3, 2, 4], 6)); //[1,2]
