/* 345. Reverse Vowels of a String
cceptance Rate: 57.1% */

/* Test Case:
input: s = "IceCreAm"
Expected output: "AceCreIm"
Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm". */

var reverseVowels = function (s) {
  let vowels = "aeiouAEIOU";
  let vowelsInString = [];
  let vIndex = [];
  let res = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsInString.push(s[i]);
      vIndex.push(i);
    }
  }
  vowelsInString.reverse();

  for (let i = 0; i < vowelsInString.length; i++) {
    res[vIndex[i]] = vowelsInString[i];
  }
  return res.join("");
};

console.log(reverseVowels("IceCreAm")); // "AceCreIm"
console.log(reverseVowels("leetcode")); // "leotcede"
