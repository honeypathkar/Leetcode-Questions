/* 3289. The Two Sneaky Numbers of Digitville
Acceptance Rate: 88.7% */

/* Test Case:
input: nums = [0,1,1,0]
Expected output: [0,1]
Explanation:
The numbers 0 and 1 each appear twice in the array. */

var getSneakyNumbers = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let count = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 2) {
      arr.push(nums[i]);
    }
    count = 0;
  }
  return arr;
};

console.log(getSneakyNumbers([0, 1, 1, 0]));
console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]));
