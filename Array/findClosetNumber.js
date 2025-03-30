/* 2239. Find Closest Number to Zero
Acceptance Rate: 47.0% */

/* Test Case:
input: nums = [-4,-2,1,4,8]
Expected output: 1
Explanation:
 - The distance from -4 to 0 is |-4| = 4.
 - The distance from -2 to 0 is |-2| = 2.
 - The distance from 1 to 0 is |1| = 1.
 - The distance from 4 to 0 is |4| = 4.
 - The distance from 8 to 0 is |8| = 8.
Thus, the closest number to 0 in the array is 1.
 */

var findClosestNumber = function (nums) {
  let arr = nums.map((num) => Math.abs(0 - num));
  let minAbs = Math.min(...arr);
  let ans = nums.filter((num) => Math.abs(num) === minAbs);
  return Math.max(...ans);
};

console.log(findClosestNumber([-4, -2, 1, 4, 8])); // 1
console.log(findClosestNumber([2, -1, 1])); // 1
