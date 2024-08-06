/* 912. Sort an Array
Acceptance Rate: 58.1% */

/* Test Case:
input: nums = [5,2,3,1]
Expected output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5). */

/* Condition:
You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible. */

var sortArray = function (nums) {
  if (nums.length < 2) {
    return nums;
  }
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);
  return mearge(sortArray(left), sortArray(right));
};
function mearge(left, right) {
  let sort = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sort.push(left.shift());
    } else {
      sort.push(right.shift());
    }
  }
  return [...sort, ...left, ...right];
}

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));
