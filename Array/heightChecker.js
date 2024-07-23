/* 1051. Height Checker
Acceptance Rate: 80.7% */

/* Test Case:
input: heights = [1,1,4,2,1,3]
Expected output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match. */

var heightChecker = function (heights) {
  let expected = [...heights].sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      res.push(heights[i]);
    }
  }
  return res.length;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([1, 2, 3, 4, 5]));
