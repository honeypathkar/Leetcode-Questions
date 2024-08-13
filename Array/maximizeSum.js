/* 2656. Maximum Sum With Exactly K Elements 
Acceptance Rate: 82.3% */

/* Test Case:
input: nums = [1,2,3,4,5], k = 3
Expected output: 18
Explanation: We need to choose exactly 3 elements from nums to maximize the sum.
For the first iteration, we choose 5. Then sum is 5 and nums = [1,2,3,4,6]
For the second iteration, we choose 6. Then sum is 5 + 6 and nums = [1,2,3,4,7]
For the third iteration, we choose 7. Then sum is 5 + 6 + 7 = 18 and nums = [1,2,3,4,8]
So, we will return 18.
It can be proven, that 18 is the maximum answer that we can achieve. */

var maximizeSum = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    let maxV = Math.max(...nums);
    sum += maxV;
    maxV += 1;
    nums.push(maxV);
  }
  return sum;
};

console.log(maximizeSum([1, 2, 3, 4, 5], 3));
console.log(maximizeSum([5, 5, 5], 2));
