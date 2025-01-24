/* 2785. Sort Vowels in a String
Acceptance Rate: 80.7% */

/* Test Case:
input: s = "lEetcOde"
Expected output: "lEOtcede"
Explanation: 'E', 'O', and 'e' are the vowels in s; 'l', 't', 'c', and 'd' are all consonants. The vowels are sorted according to their ASCII values, and the consonants remain in the same places. */

var sortVowels = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let vowelArray = [];

  for (let char of s) {
    if (vowels.has(char)) {
      vowelArray.push(char);
    }
  }

  vowelArray.sort();

  let result = "";
  let vowelIndex = 0;
  for (let char of s) {
    if (vowels.has(char)) {
      result += vowelArray[vowelIndex];
      vowelIndex++;
    } else {
      result += char;
    }
  }
  return result;
};

console.log(sortVowels("lEetcOde"));
console.log(sortVowels("lYmpH"));
