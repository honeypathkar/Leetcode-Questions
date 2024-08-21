/* 2215. Find the Difference of Two Arrays
Acceptance Rate: 79.3% */

/* Test Case:
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Expected output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2.
Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2.
Therefore, answer[1] = [4,6]. */

var findDifference = function (nums1, nums2) {
  let arr1 = new Set(nums1);
  let arr2 = new Set(nums2);
  let ans = [[], []];

  for (let i of arr1) {
    if (!arr2.has(i)) {
      ans[0].push(i);
    }
  }

  for (let i of arr2) {
    if (!arr1.has(i)) {
      ans[1].push(i);
    }
  }
  return ans;
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 1, 2, 3], [1, 1, 2, 2]));
