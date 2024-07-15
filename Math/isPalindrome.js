/* 9. Palindrome Number
Acceptance Rate: 56.9% */

/* Test case:
input: x = 121
Expected output: true
Explanation: 121 reads as 121 from left to right and from right to left */

var isPalindrome = function (x) {
  const numStr = x.toString();
  const reverseStr = numStr.split("").reverse().join("");
  return numStr === reverseStr;
};

console.log(isPalindrome(121)); //true
console.log(isPalindrome(-121)); //false
