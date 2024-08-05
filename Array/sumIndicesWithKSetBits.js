/* 2859. Sum of Values at Indices With K Set Bits
Acceptance Rate: 86.6% */

/* Test case:
input: nums = [5,10,1,5,2], k = 1
Expected output: 13
Explanation: The binary representation of the indices are: 
0 = 0002
1 = 0012
2 = 0102
3 = 0112
4 = 1002 
Indices 1, 2, and 4 have k = 1 set bits in their binary representation.
Hence, the answer is nums[1] + nums[2] + nums[4] = 13. */

var sumIndicesWithKSetBits = function (nums, k) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let binary = i.toString(2);
    let countOfOnes = binary.split("").filter((bit) => bit === "1").length;
    if (countOfOnes === k) {
      result += nums[i];
    }
  }
  return result;
};

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1));
console.log(sumIndicesWithKSetBits([4, 3, 2, 1], 2));
