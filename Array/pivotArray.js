/* 2161. Partition Array According To Given Pivot
Acceptance Rate: 85.2% */

/* Test Case:
input: nums = [9,12,5,10,14,3,10], pivot = 10
Expected output: [9,5,3,10,10,12,14]
Explanation: 
The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained.
[9, 5, 3] and [12, 14] are the respective orderings. */

var pivotArray = function (nums, pivot) {
  let less = [];
  let equal = [];
  let greater = [];

  for (let num of nums) {
    if (num < pivot) {
      less.push(num);
    } else if (num === pivot) {
      equal.push(num);
    } else {
      greater.push(num);
    }
  }
  return [...less, ...equal, ...greater];
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
console.log(pivotArray([-3, 4, 3, 2], 2));
