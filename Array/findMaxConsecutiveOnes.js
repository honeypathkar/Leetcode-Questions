/* 485. Max Consecutive Ones
Acceptance Rate: 63.1%% */

/* Test Case:
input: nums = [1,1,0,1,1,1]
Expected output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3. */

var findMaxConsecutiveOnes = function (nums) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      arr.push(count);
      count = 0;
    }
  }
  arr.push(count);
  return Math.max(...arr);
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
