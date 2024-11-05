/* 1796. Second Largest Digit in a String
Acceptance Rate: 50.9% */

/* Test Case:
input: s = "dfa12321afd"
Expected output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2. */

var secondHigest = function (s) {
  let nums = s
    .replace(/[a-zA-Z]/g, "")
    .split("")
    .map(Number);
  nums = [...new Set(nums)];
  // Method 1
  // nums.sort((a, b) => a - b);
  // Method 2
  nums.sort((a, b) => b - a);

  // Method 1
  // return nums.length < 2 ? -1 : nums[nums.length - 2];
  // Method 2
  return nums.length < 2 ? -1 : nums[1];
};

console.log(secondHigest("dfa12321afd"));
console.log(secondHigest("abc1111"));
