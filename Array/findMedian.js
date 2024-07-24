/* 4. Median of Two Sorted Arrays
Acceptance Rate: 40.8% */

/* Test case;
input: nums1 = [1,2], nums2 = [3,4]
Expected output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5. */

var findMedianSortedArrays = function (nums1, nums2) {
  let sortArr = [...nums1, ...nums2].sort((a, b) => a - b);
  if (sortArr.length % 2 !== 0) {
    return sortArr[Math.floor(sortArr.length / 2)];
  } else {
    let mid = sortArr.length / 2;
    let res = sortArr[mid] + sortArr[mid - 1];
    return res / 2;
  }
};

console.log(findMedianSortedArrays([1, 2], [3]));
console.log(findMedianSortedArrays([1, 3], [2, 4]));
