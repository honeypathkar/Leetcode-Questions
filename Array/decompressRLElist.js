/* 1313. Decompress Run-Length Encoded List
Acceptance Rate: 85.8% */

/* Test Case:
input: nums = [1,2,3,4]
Expected output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4]. */

var decompressRLElist = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i += 2) {
    while (nums[i] > 0) {
      arr.push(nums[i + 1]);
      nums[i]--;
    }
  }
  return arr;
};

console.log(decompressRLElist([1, 2, 3, 4]));
console.log(decompressRLElist([10, 5, 20, 4]));
