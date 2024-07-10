/* 961. N-Repeated Element in Size 2N Array
Acceptance Rate: 76.8% */

/* Test Case:
input: [1,3,2,3]
Expected Output: 3
Explanation: Return the element that is repeated n times */

var repeatedNTimes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
        if (count >= 2) {
          return nums[j];
        }
      }
    }
  }
};

console.log(repeatedNTimes([1, 3, 2, 3])); //3
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])); //5
