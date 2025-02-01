/* 3151. Special Array I
Acceptance Rate: 79.3% */

/* Test Case:
Input: nums = [2,1,4]
Output: true
Explanation:
There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true. */

var isSpecialArray = function (nums) {
  if (nums.length == 0) {
    return true;
  }
  for (let i = 0; i < nums.length; i++) {
    if (
      (nums[i] % 2 === 0 && nums[i + 1] % 2 === 0) ||
      (nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0)
    ) {
      return false;
    }
  }
  return true;
};

console.log(isSpecialArray([2, 1, 4]));
console.log(isSpecialArray([4, 3, 1, 6]));
