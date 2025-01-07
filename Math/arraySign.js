/* 1822. Sign of the Product of an Array
Acceptance Rate: 65.3% */

/* Test Case:
input: nums = [-1,-2,-3,-4,3,2,1]
Expected output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1 */

var arraySign = function (nums) {
  let res = nums.reduce((acc, curr) => acc * curr, 1);
  if (res > 1) {
    return 1;
  } else if (res == 0) {
    return 0;
  } else {
    return -1;
  }
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([1, 5, 0, 2, -3]));
