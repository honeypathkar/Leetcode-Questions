/* 977. Squares of a Sorted Array
Accepatance Rate: 73.0% */

/* Test Case:
input: nums = [-4,-1,0,3,10]
Expected output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]. */

var sortedSquares = function (nums) {
  let arr = nums.map(Math.abs);
  let sortArr = arr.sort((a, b) => a - b);
  let square = sortArr.map((number) => number ** 2);
  return square;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
