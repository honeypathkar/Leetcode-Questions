/* 557. Reverse Words in a String III
Acceptance Rate: 83.3% */

/* Test Case:
input: s = "Let's take LeetCode contest"
Expected output: "s'teL ekat edoCteeL tsetnoc"
Explanation : Reverses each word within the string while keeping the word order intact, and returns the transformed string */

var reverseWords = function (s) {
  let arr = s.split(" ");
  let reversedWords = [];
  for (let i = 0; i < arr.length; i++) {
    let reverseWord = arr[i];
    let res = reverseWord.split("").reverse().join("");
    reversedWords.push(res);
  }
  return reversedWords.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("Luffy is still a Joyboy"));
