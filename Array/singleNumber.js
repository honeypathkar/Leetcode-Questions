/* 136. Single Number
Acceptance Rate: 74.3% */

/* Test Case:
input: nums = [4,1,2,1,2]
Expected output: 4 
Explanation: Here's 4 apperar only one time that's why the output is 4 */

var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 1) {
      return nums[i];
    }
  }
  return undefined;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1, 2, 2]));
