/* 2455. Average Value of Even Numbers That Are Divisible by Three
Acceptance Rate: 60.6% */

/* Test Case:
input: nums = [1,3,6,10,12,15]
Expected output: 9
Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9. */

var averageValue = function (nums) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 == 0 && nums[i] % 2 === 0) {
      sum += nums[i];
      count++;
    }
  }
  return count !== 0 ? Math.floor(sum / count) : 0;
};

console.log(averageValue([1, 3, 6, 10, 12, 15]));
console.log(averageValue([1, 2, 4, 7, 10]));
