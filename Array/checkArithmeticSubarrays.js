/* 1630. Arithmetic Subarrays
Acceptance Rate: 83.7% */

/* Test Case:
input: nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]
Expected output: [true,false,true]
Explanation:
In the 0th query, the subarray is [4,6,5]. This can be rearranged as [6,5,4], which is an arithmetic sequence.
In the 1st query, the subarray is [4,6,5,9]. This cannot be rearranged as an arithmetic sequence.
In the 2nd query, the subarray is [5,9,3,7]. This can be rearranged as [3,5,7,9], which is an arithmetic sequence. */

var checkArithmeticSubarrays = function (nums, l, r) {
  let m = l.length;
  let res = [];
  for (let i = 0; i < m; i++) {
    let subArr = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);
    let difference = subArr[1] - subArr[0];
    let isArithmetic = true;
    for (let j = 1; j < subArr.length - 1; j++) {
      if (subArr[j + 1] - subArr[j] !== difference) {
        isArithmetic = false;
        break;
      }
    }
    res.push(isArithmetic ? true : false);
  }
  return res;
};

console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5])); // [true,false,true]
console.log(
  checkArithmeticSubarrays(
    [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
    [0, 1, 6, 4, 8, 7],
    [4, 4, 9, 7, 9, 10]
  )
); // [false,true,false,false,true,true]
