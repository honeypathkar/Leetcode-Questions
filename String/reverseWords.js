/* 151. Reverse Words in a String
Acceptamce Rate: 46.8% */

/* Test Case:
input: s = "a good   example"
Expected output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string. */

var reverseWords = function (s) {
  let str = s.replace(/\s+/g, " ").trim();
  return str.split(" ").reverse().join(" ");
};

console.log(reverseWords("a good  example"));
console.log(reverseWords("the sky is blue"));
