/* 283. Move Zeros
Acceptance Rate: 62.3% */

/* Test Case:
input: nums = [0,1,0,3,12]
Expected output: [1,3,12,0,0] */

var moveZeros = function (nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
  return nums;
};

console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([1, 2, 0, 5, 4, 6, 0, 8, 9]));
