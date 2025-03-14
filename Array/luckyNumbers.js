/* 1380. Lucky Numbers in a Matrix
Acceptance Rate: 79.9% */

/* Test Case:
input: matrix = [[3, 7, 8], [9, 11, 13], [15, 16, 17]]
Expected output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column. */

var luckyNumbers = function (matrix) {
  let minInRows = new Set(matrix.map((row) => Math.min(...row)));
  let maxInCols = new Set(
    matrix[0].map((_, colIndex) =>
      Math.max(...matrix.map((row) => row[colIndex]))
    )
  );
  return [...minInRows].filter((num) => maxInCols.has(num));
};

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
); // [15]
console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ])
); // [12]
