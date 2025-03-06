/* 2965. Find Missing and Repeated Values
Acceptance Rate: 82.1% */

/* Test Case:
input: grid = [[1,3],[2,2]]
Excpected output: [2,4]
Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4]. */

var findMissingAndRepeatedValues = function (grid) {
  let res = [];
  let arr = new Set();
  let newArr = grid.flat();
  let n = newArr.length;
  for (let num of newArr) {
    if (arr.has(num)) {
      res[0] = num;
    } else {
      arr.add(num);
    }
  }
  res[1] = (n * (n + 1)) / 2 - [...arr].reduce((acc, curr) => acc + curr, 0);
  return res;
};

console.log(
  findMissingAndRepeatedValues([
    [1, 3],
    [2, 2],
  ])
);
console.log(
  findMissingAndRepeatedValues([
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
  ])
);
