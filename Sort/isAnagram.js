/* 242. Valid Anagram
Acceptance Rate: 65.3% */

/* Test Case:
input: s = "anagram", t = "nagaram"
Expected output: true */

var isAnagram = function (s, t) {
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");
  return str1 === str2;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("car", "rat"));
