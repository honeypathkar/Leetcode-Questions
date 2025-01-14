/* 804. Unique Morse Code Words
Acceptance Rate: 83.1% */

/* Test Case:
input: words = ["gin","zen","gig","msg"]
Expected output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.". */

var uniqueMorseRepresentations = function (words) {
  let morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  let keyMap = {};

  for (let i = 0; i < alphabet.length; i++) {
    keyMap[alphabet[i]] = morseCode[i];
  }

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i]
      .split("")
      .map((char) => keyMap[char])
      .join("");
  }

  return [...new Set(words)].length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
console.log(uniqueMorseRepresentations(["a", "hp"]));
