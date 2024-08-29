/* 905. Sort Array By Parity
Acceptance Rate: 76.2% */

/* Test Case:
input: nums = [3,1,2,4]
Expected output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted. */

var sortArrayByParity = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([10, 9, 7, 6]));
