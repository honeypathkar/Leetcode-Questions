/* 2570. Merge Two 2D Arrays by Summing Values
Acceptance Rate: 82.5% */

/* Test Case:
input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
Expected output: [[1,6],[2,3],[3,2],[4,6]]
Explanation: The resulting array contains the following:
- id = 1, the value of this id is 2 + 4 = 6.
- id = 2, the value of this id is 3.
- id = 3, the value of this id is 2.
- id = 4, the value of this id is 5 + 1 = 6. */

var mergeArrays = function (nums1, nums2) {
  let res = [];
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i][0] === nums2[j][0]) {
      res.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
      i++;
      j++;
    } else if (nums1[i][0] < nums2[j][0]) {
      res.push(nums1[i]);
      i++;
    } else {
      res.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    res.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    res.push(nums2[j]);
    j++;
  }

  return res;
};

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
); // [[1,6],[2,3],[3,2],[4,6]]
console.log(
  mergeArrays(
    [
      [2, 4],
      [3, 6],
      [5, 5],
    ],
    [
      [1, 3],
      [4, 3],
    ]
  )
); // [[1,3],[2,4],[3,6],[4,3],[5,5]]
