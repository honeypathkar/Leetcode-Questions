/* 1464. Maximum Product of Two Elements in an Array
Acceptance Rate: 82.8% */

/* Test Case:
Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value,
that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.  */

var maxProduct = function (nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  return (nums[n - 1] - 1) * (nums[n - 2] - 1);
};

console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([1, 5, 4, 5]));
