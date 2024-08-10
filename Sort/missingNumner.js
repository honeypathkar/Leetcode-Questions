/* 268. Missing Number
Acceptance Rate: 67.7% */

/* Test Case:
input: nums = [3,0,1]
Expected output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums. */

var missingNumber = function (nums) {
  let arr = [];
  for (let i = 0; i <= nums.length; i++) {
    arr.push(i);
  }
  let missingNo = arr.filter((element) => !nums.includes(element));
  return missingNo;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
