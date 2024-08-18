/* 3110. Score of a String
Acceptance Rate: 93.2% */

/* Test Case:
input: s = "hello"
Expected output: 13
Explanation:
The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111.
So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13. */

var scoreOfString = function (s) {
  let arr = [];
  let newArr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s.charCodeAt(i));
  }
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i] - arr[i + 1]);
  }
  return newArr.map((item) => Math.abs(item))
  .reduce((acc, curr) => acc + curr, 0);
};

console.log(scoreOfString("hello"));
console.log(scoreOfString("Honey"));
