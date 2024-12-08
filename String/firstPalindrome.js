/* 2108. Find First Palindromic String in the Array
Acceptance Rate: 83.9% */

/* Test Case;
input: words = ["abc","car","ada","racecar","cool"]
Expected output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first. */

var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let strReverse = word.split("").reverse().join("");
    if (word == strReverse) {
      return word;
    }
  }
  return "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(firstPalindrome(["def", "ghi"]));
