/* 496. Next Greater Element I
Acceptance Rate: 73.0% */

/* Test Case:
input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Expected output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1. */

var nextGreaterElement = function (nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    let found = false;
    let greaterFound = false;

    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        found = true;
      }
      if (found && nums2[j] > nums1[i]) {
        nums1[i] = nums2[j];
        greaterFound = true;
        break;
      }
    }
    if (!greaterFound) {
      nums1[i] = -1;
    }
  }
  return nums1;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
