/* 198. House Robber
Acceptance Rate: 51.8% */

/* Test Case:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4. */

var rob = function (nums) {
  let noRob = 0;
  let rob = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentRob = Math.max(nums[i] + noRob, rob);
    noRob = rob;
    rob = currentRob;
  }
  return rob;
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
