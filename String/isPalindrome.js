/* 125. Valid Palindrome
Acceptance Rate: 48.4% */

/* Test Case:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome. */

var isPalindrome = function (s) {
  if (s === "") {
    return true;
  } else {
    let str = s.replace(/[^a-zA-Z0-9]/g, "");
    let lowerCase = str.toLowerCase();
    let reverse = lowerCase.split("").reverse().join("");
    if (reverse === lowerCase) {
      return true;
    }
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
