/* 917. Reverse Only Letters
Acceptance Rate: 66.5% */

/* Test Case:
input: s = "ab-cd"
Expected output: "dc-ba"
Explanation: 
Given a string s, reverse the string according to the following rules:
 - All the characters that are not English letters remain in the same position.
 - All the English letters (lowercase or uppercase) should be reversed. */

var reverseOnlyLetters = function (s) {
  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (left < right && !/[a-zA-Z]/.test(arr[left])) {
      left++;
    } else if (left < right && !/[a-zA-Z]/.test(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join("");
};

console.log(reverseOnlyLetters("ab-cd")); // "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); // "Qedo1ct-eeLg=ntse-T!"
