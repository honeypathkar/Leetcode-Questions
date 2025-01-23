/* 3285. Find Indices of Stable Mountains
Acceptance Rate: 87.0% */

/* Test Case:
Input: height = [1,2,3,4,5], threshold = 2
Output: [3,4]
Explanation:
 - Mountain 3 is stable because height[2] == 3 is greater than threshold == 2.
 - Mountain 4 is stable because height[3] == 4 is greater than threshold == 2. */

var stableMountains = function (height, threshold) {
  let arr = [];
  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > threshold) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(stableMountains([1, 2, 3, 4, 5], 2));
console.log(stableMountains([10, 1, 10, 1, 10], 3));
