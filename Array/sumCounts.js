/* 2913. Subarrays Distinct Element Sum of Squares I
Acceptance Rate: 81.9% */

/* Test Case:
input: nums = [1,2,1]
Expected output: 15
Explanation: Six possible subarrays are:
[1]: 1 distinct value
[2]: 1 distinct value
[1]: 1 distinct value
[1,2]: 2 distinct values
[2,1]: 2 distinct values
[1,2,1]: 2 distinct values
The sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 + 22 + 22 + 22 = 15. */

var sumCounts = function (nums) {
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let arr = [...new Set(nums.slice(i, j + 1))].length;
      totalSum += arr * arr;
    }
  }
  return totalSum;
};

console.log(sumCounts([1, 2, 1]));
console.log(sumCounts([1, 1]));
