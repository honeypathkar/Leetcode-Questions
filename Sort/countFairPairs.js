/* 2563. Count the Number of Fair Pairs
Acceptance Rate: 33.4% */

/* Test Case:
input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
Expected output: 6
Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5). */

//Helper Function
function countLess(nums, val) {
  let res = 0;
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] >= val) {
      j--;
    } else {
      res += j - i;
      i++;
    }
  }
  return res;
}

var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b);
  return countLess(nums, upper + 1) - countLess(nums, lower);
};

console.log(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6));
console.log(countFairPairs([1, 7, 9, 2, 5], 11, 11));
