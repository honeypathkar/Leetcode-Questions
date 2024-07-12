/* 2520. Count the Digits That Divide a Number
Acceptance Rate: 84.6% */

/* Test case: 
input: num = 121
Expected output: 2
Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2. */

var countDigits = function (num) {
  if (num.toString().length < 2) {
    return 1;
  }
  let nums = num.toString().split("").map(Number);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (num % nums[i] === 0) {
      count++;
    }
  }
  return count;
};

console.log(countDigits(121));
console.log(countDigits(12468));
