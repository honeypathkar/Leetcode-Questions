/* 2000. Reverse Prefix of Word
Acceptance Rate: 86.3% */

/* Test Case:
input: word = "abcdefd", ch = "d"
Expected output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd". */

var reversePrefix = function (word, ch) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == ch) {
      return (
        word
          .slice(0, i + 1)
          .split("")
          .reverse()
          .join("") + word.slice(i + 1)
      );
    }
  }
  return word;
};

console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("xyxzxe", "z"));
