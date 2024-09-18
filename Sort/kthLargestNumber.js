/* 1985. Find the Kth Largest Integer in the Array
Acceptance Rate: 45.9% */

/* Test Case:
input: nums = ["3","6","7","10"], k = 4
Expected output: "3"
Explanation:
The numbers in nums sorted in non-decreasing order are ["3","6","7","10"].
The 4th largest integer in nums is "3". */

var kthLargestNumber = function (nums, k) {
  let arr = nums.map((item) => BigInt(item));
  arr.sort((a, b) => (a > b ? 1 : -1));
  return arr[arr.length - k].toString();
};

console.log(kthLargestNumber(["3", "6", "7", "10"], 4));
console.log(kthLargestNumber(["2", "21", "12", "1"], 3));
