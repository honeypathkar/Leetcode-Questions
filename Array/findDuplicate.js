/* 442. Find All Duplicates in an Array
Acceptance Rate: 75.9% */

/* Test Case:
input: nums = [4,3,2,7,8,2,3,1]
Expected output: [2,3] 
Explanation: Since 2 and 3 appear twice in array so we return [2,3] */

var findDuplicates = function (nums) {
  let notDublicate = new Set();
  let arr = [];
  for (let num of nums) {
    if (notDublicate.has(num)) {
      arr.push(num);
    } else {
      notDublicate.add(num);
    }
  }
  return arr;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([1, 1, 2]));
