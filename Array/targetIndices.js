/* 2089. Find Target Indices After Sorting Array
Acceptance Rate: 76.5% */

/* Test Case:
input: nums = [1,2,5,2,3], target = 2
Expected output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2. */

var targetIndices = function (nums, target) {
  let arr = nums.sort((a, b) => a - b);
  let tarArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      tarArr.push(i);
    }
  }
  return tarArr;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
console.log(targetIndices([1, 2, 5, 2, 3], 5));
