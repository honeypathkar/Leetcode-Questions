/* 2574. Left and Right Sum Differences
Acceptance Rate: 87.1% */

/* Test Case:
input: nums = [10,4,8,3]
Expected output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22]. */

var leftRightDifference = function (nums) {
  let leftSum = [];
  let rightSum = [];
  let leftTotal = 0;
  let rightTotal = 0;
  let diffrence = [];

  for (let i = 0; i < nums.length; i++) {
    leftSum.push(leftTotal);
    leftTotal += nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    rightSum.unshift(rightTotal);
    rightTotal += nums[i];
  }

  for (let i = 0; i < rightSum.length; i++) {
    let absDiff = Math.abs(leftSum[i] - rightSum[i]);
    diffrence.push(absDiff);
  }

  return diffrence;
};

console.log(leftRightDifference([10, 4, 8, 3]));
console.log(leftRightDifference([1, 2, 3, 4]));
