/* 3232. Find if Digit Game Can Be Won
Acceptance Rate: 83.1% */

/* Test Case:
input: nums = [1,2,3,4,5,14]
Expected output: true
Explanation:
Alice can win by choosing single-digit numbers which have a sum equal to 15. */

var canAliceWin = function (nums) {
  let singleDigit = [];
  let doubleDigit = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 10) {
      singleDigit.push(nums[i]);
    } else {
      doubleDigit.push(nums[i]);
    }
  }
  let singleDigitEqual = singleDigit.reduce((acc, curr) => acc + curr, 0);
  let doubleDigitEqual = doubleDigit.reduce((acc, curr) => acc + curr, 0);

  if (
    singleDigitEqual > doubleDigitEqual ||
    singleDigitEqual < doubleDigitEqual
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(canAliceWin([1, 2, 3, 4, 5, 14]));
console.log(canAliceWin([1, 2, 3, 4, 10]));
