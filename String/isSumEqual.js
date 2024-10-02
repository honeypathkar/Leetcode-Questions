/* 1880. Check if Word Equals Summation of Two Words
Acceptance Rate: 74.4% */

/* Test Case:
input: firstWord = "acb", secondWord = "cba", targetWord = "cdb"
Expected output: true
Explanation:
The numerical value of firstWord is "acb" -> "021" -> 21.
The numerical value of secondWord is "cba" -> "210" -> 210.
The numerical value of targetWord is "cdb" -> "231" -> 231.
We return true because 21 + 210 == 231. */

//Helper Function
const wordToNumber = (str) => {
  let number = "";
  for (let i = 0; i < str.length; i++) {
    number += str.charCodeAt(i) - "a".charCodeAt(0);
  }
  return parseInt(number);
};

var isSumEqual = function (firstWord, secondWord, targetWord) {
  let firstWordValue = wordToNumber(firstWord);
  let secondWordValue = wordToNumber(secondWord);
  let targetWordValue = wordToNumber(targetWord);

  return firstWordValue + secondWordValue === targetWordValue;
};

console.log(isSumEqual("acb", "cba", "cdb"));
console.log(isSumEqual("aaa", "a", "aab"));
