/* 58. Length of Last Word
Acceptance Rate: 53.0% */

/* Test Case:
input: s = "luffy is still joyboy"
Expected output: 6
Explanation: The last word is "joyboy" with length 6. */

var lengthOfLastWord = function (s) {
  let lastWord = s.trim().split(" ").pop();
  let len = lastWord.length;
  return len;
};

console.log(lengthOfLastWord("Luffy is still joyboy"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
