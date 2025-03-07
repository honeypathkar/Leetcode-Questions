/* 7%04. Determine if String Halves Are Alike
Acceptance Rate: 78.6% */

/* Test Case:
input: s = "textbook"
Expected output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice. */

var halvesAreAlike = function (s) {
  let n = s.length;
  let a = s.slice(0, n / 2).split("");
  let b = s.slice(n / 2).split("");
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let strAVowelsCount = a.filter((i) => vowels.includes(i)).length;
  let strBVowelsCount = b.filter((i) => vowels.includes(i)).length;

  return strAVowelsCount === strBVowelsCount;
};

console.log(halvesAreAlike("textbook")); // false
console.log(halvesAreAlike("book")); // true
