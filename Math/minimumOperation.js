/* 3190. Find Minimum Operations to Make All Elements Divisible by Three
Acceptance Rate: 89.9% */

/* Test Case:
input: nums = [1,2,3,4]
Expected output: 3
Explanation:
All array elements can be made divisible by 3 using 3 operations:
- Subtract 1 from 1.
- Add 1 to 2.
- Subtract 1 from 4. */

var minimumOperations = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 !== 0) {
      count++;
    }
  }
  return count;
};

console.log(minimumOperations([1, 2, 3, 4]));
console.log(minimumOperations([3, 6, 9]));
