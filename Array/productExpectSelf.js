/* 238. Product of Array Expect Self 
Acceptance Rate: 67.1% */

/* Test Case:
input: nums = [1,2,3,4]
Expected output: [24,12,8,6] */

// 1. Method, TC:  O(n^2)
var productExceptSelf = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let val = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        val *= nums[j];
      }
    }
    answer.push(val);
  }
  return answer;
};

console.log("First Method: ", productExceptSelf([1, 2, 3, 4]));

// 2. Method, TC: O(n)
var productExceptSelf2 = function (nums) {
  let n = nums.length;
  let answer = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] *= prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
};

console.log("Second Method: ", productExceptSelf2([1, 2, 3, 4]));
