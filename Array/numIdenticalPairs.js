/* 1512. Number of Good Pairs
Acceptance Rate: 89.2% */

/* Test Case:
input: nums = [1,2,3,1,1,3]
Expected output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed. */

var numIdenticalPairs = function (nums) {
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        pairs++;
      }
    }
  }
  return pairs;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
