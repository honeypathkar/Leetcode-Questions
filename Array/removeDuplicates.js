/* 26. Remove Duplicates from Sorted Array
Acceptance Rate: 58.9% */

/* Test Case:
input: nums = [1,1,2]
Expected output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores). */

var removeDuplicates = function (nums) {
  if (nums.length == 0) {
    return 0;
  }
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
