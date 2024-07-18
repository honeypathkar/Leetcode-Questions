/* 3131. Find the Integer Added to Array I
Acceptance Rate: 81.9% */
/* 
Test case:
input: nums1 = [2,6,4], nums2 = [9,7,5]
Expected output: 3
Explanation: The integer added to each element of nums1 is 3. */

var addedInteger = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let add;
  for (let i = 0; i < nums2.length; i++) {
    add = nums2[i] - nums1[i];
  }
  return add;
};
let arr1 = [2, 6, 4];
let arr2 = [9, 7, 5];
console.log(addedInteger(arr1, arr2));
