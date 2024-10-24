/* 74. Search a 2D Matrix 
Acceptance Rate: 51.2% */

/* Test Case:
input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Expected output: true 
Explanation: Given an integer target, return true if target is in matrix or false otherwise.*/

var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midValue = matrix[Math.floor(mid / n)][mid % n];

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
