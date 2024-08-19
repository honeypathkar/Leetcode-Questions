/* 1929. Concatenation of Array
Acceptance Rate: 90.0% */

/* Test Case:
input: nums = [1,2,1]
Expected output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1] */

//Method 1
var getConcatenation1 = function (nums) {
  let arr = [];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    arr[i] = arr[i + n] = nums[i];
  }
  return arr;
};

//Method 2
var getConcatenation2 = function (nums) {
  return [...nums, ...nums];
};

console.log(getConcatenation1([1, 2, 1]));
console.log(getConcatenation2([1, 3, 2, 1]));
