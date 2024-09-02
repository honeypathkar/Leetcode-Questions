/* 88. Merge Sorted Array
Acceptance Rate: 50.8% */

/* Test Case:
input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Expected output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1. */

var merge = function (nums1, m, nums2, n) {
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m];
  }
  return nums1.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));
