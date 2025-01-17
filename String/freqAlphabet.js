/* 1309. Decrypt String from Alphabet to Integer Mapping
Acceptance Rate: 80.0% */

/* Test Case;
input: s = "10#11#12"
Expected output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2". */

var freqAlphabet = function (s) {
  let result = "";
  let i = 0;
  while (i < s.length) {
    if (i + 2 < s.length && s[i + 2] == "#") {
      let num = parseInt(s.substring(i, i + 2));
      result += String.fromCharCode(96 + num);
      i += 3;
    } else {
      let num = parseInt(s[i]);
      result += String.fromCharCode(96 + num);
      i += 1;
    }
  }
  return result;
};

console.log(freqAlphabet("10#11#12"));
console.log(freqAlphabet("1326#"));
