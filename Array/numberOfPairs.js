/* 3162. Find the Number of Good Pairs I
Acceptance Rate: 86.7% */

/* Test Case:
input: nums1 = [1,3,4], nums2 = [1,3,4], k = 1
Expected output: 5
Explanation: The 5 good pairs are (0, 0), (1, 0), (1, 1), (2, 0), and (2, 2).
A pair (i, j) is called good if nums1[i] is divisible by (nums2[j] * k) */

var numberOfPairs = function (nums1, nums2, k) {
  let pairs = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] % (nums2[j] * k) === 0) {
        pairs++;
      }
    }
  }
  return pairs;
};

console.log(numberOfPairs([1, 3, 4], [1, 3, 4], 1));
console.log(numberOfPairs([1, 2, 4, 12], [2, 4], 3));
