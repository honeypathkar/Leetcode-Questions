/* 28. Find the Index of the First Occurrence in a String
Acceptance Rate: 42.9%*/

/* Test case:
input: haystack = "sadbutsad", needle = "sad"
Expected output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0. */

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));

