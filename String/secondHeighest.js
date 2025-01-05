/* 1796. Second Largest Digit in a String
Acceptance Rate: 51.2% */

/* Test Case:
input: s = "dfa12321afd"
Expected output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2. */

var secondHeighest = function (s) {
  let nums = s
    .replace(/[a-zA-Z]/g, "")
    .split("")
    .map(Number);
  nums = [...new Set(nums)];
  nums.sort((a, b) => a - b);

  if (nums.length < 2) {
    return -1;
  } else {
    return nums[nums.length - 2];
  }
};

console.log(secondHeighest("dfa12321afd"));
console.log(secondHeighest("abc1111"));
