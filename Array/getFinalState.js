/* 3264. Final Array State After K Multiplication Operations I
Acceptance Rate: 81.3% */

/* Test Case:
input: nums = [2,1,3,5,6], k = 5, multiplier = 2
Expected output: [8,4,6,5,6] 
Explanation:
    Operation	         Result
After operation 1   [2, 2, 3, 5, 6]
After operation 2	[4, 2, 3, 5, 6]
After operation 3	[4, 4, 3, 5, 6]
After operation 4	[4, 4, 6, 5, 6]
After operation 5	[8, 4, 6, 5, 6]
*/

var getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    let min = Math.min(...nums);
    let index = nums.indexOf(min);
    nums[index] = min * multiplier;
  }
  return nums;
};

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2));
console.log(getFinalState([1, 2], 3, 4));
