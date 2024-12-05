/* 645. Set Mismatch
Acceptance Rate: 44.7% */

/* Test Case:
input: nums = [1,2,2,4]
Expected output: [2,3] 
Explanation: 2 is duplicate here and number 3 is missing so the output is [2,3]*/

var findErrorNums = function (nums) {
  let ans = new Array(2);
  let n = nums.length;
  let seen = new Set();
  let sum = 0;

  for (let num of nums) {
    if (seen.has(num)) {
      ans[0] = num;
    }
    seen.add(num);
    sum += num;
  }

  let expectedSum = (n * (n + 1)) / 2;
  ans[1] = expectedSum - (sum - ans[0]);

  return ans;
};

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
