/* 1920. Build Array from Permutation
Acceptance Rate: 90.0% */

/* Test Case:
input: nums = [0,2,1,5,3,4]
Expected output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3] */

var buildArray = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[nums[i]]);
  }
  return arr;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
console.log(buildArray([5, 0, 1, 2, 3, 4]));
