/* 3432. Count Partitions with Even Sum Difference
Acceptance Rate: 80.1% */

/* Test Case:
input: nums = [10,10,3,7,6]
Expected output: 4
Explanation:
The 4 partitions are:
- [10], [10, 3, 7, 6] with a sum difference of 10 - 26 = -16, which is even.
- [10, 10], [3, 7, 6] with a sum difference of 20 - 16 = 4, which is even.
- [10, 10, 3], [7, 6] with a sum difference of 23 - 13 = 10, which is even.
- [10, 10, 3, 7], [6] with a sum difference of 30 - 6 = 24, which is even. */

var countPartitions = function (nums) {
  let count = 0;
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    let leftSubArrTotal = nums.slice(0, i).reduce((acc, curr) => acc + curr, 0);
    let rightSubArrTotal = nums
      .slice(i, n)
      .reduce((acc, curr) => acc + curr, 0);
    if ((leftSubArrTotal - rightSubArrTotal) % 2 == 0) {
      count++;
    }
  }
  return count;
};

console.log(countPartitions([10, 10, 3, 7, 6]));
console.log(countPartitions([2, 4, 6, 8]));
