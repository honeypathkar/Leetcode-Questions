/* 3146. Permutation Difference between Two Strings
Acceptance Rate: 87.9% */

/* Test Case:
input: s = "abc", t = "bac"
Expected output: 2
Explanation:
For s = "abc" and t = "bac", the permutation difference of s and t is equal to the sum of:
 - The absolute difference between the index of the occurrence of "a" in s and the index of the occurrence of "a" in t.
 - The absolute difference between the index of the occurrence of "b" in s and the index of the occurrence of "b" in t.
 - The absolute difference between the index of the occurrence of "c" in s and the index of the occurrence of "c" in t.
That is, the permutation difference between s and t is equal to |0 - 1| + |1 - 0| + |2 - 2| = 2. */

var findPermutationDifference = function (s, t) {
  let diff = 0;
  for (let i = 0; i < s.length; i++) {
    let tIndex = t.indexOf(s[i]);
    diff += Math.abs(i - tIndex);
  }
  return diff;
};

console.log(findPermutationDifference("abc", "bac"));
console.log(findPermutationDifference("abcde", "edbac"));
