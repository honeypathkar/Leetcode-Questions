/* 2778. Sum of Squares of Special Elements 
Acceptance Rate: 81.4% */

/* Test Case:
input: nums = [1,2,3,4]
Expected output: 21
Explanation: There are exactly 3 special elements in nums: nums[1] since 1 divides 4, nums[2]
since 2 divides 4, and nums[4] since 4 divides 4. Hence, the sum of the squares of all special
elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[4] * nums[4] = 1 * 1 + 2 * 2 + 4 * 4 = 21.  */

var sumOfSquares = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums.length % (i + 1) === 0) {
      sum += nums[i] * nums[i];
    }
  }

  return sum;
};

console.log(sumOfSquares([1, 2, 3, 4]));
console.log(sumOfSquares([2, 7, 1, 19, 18, 3]));
