/* 922. Sort Array By Parity II
Acceptance Rate: 70.9% */

/* Test Case:
input: nums = [4,2,5,7]
Expected output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted. */

var sortArrayByParityII = function (nums) {
  let even = [];
  let odd = [];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 === 0 ? even.push(nums[i]) : odd.push(nums[i]);
  }
  let evenIdex = 0;
  let oddIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result[i] = even[evenIdex];
      evenIdex++;
    } else {
      result[i] = odd[oddIndex];
      oddIndex++;
    }
  }

  return result;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
console.log(sortArrayByParityII([2, 3]));
