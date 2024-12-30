/* 1422. Maximum Score After Splitting a String
Acceptance Rate: 62.2% */

/* Test Case:
input: s = "011101"
Expected output: 5 
Explanation: 
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5 
left = "01" and right = "1101", score = 1 + 3 = 4 
left = "011" and right = "101", score = 1 + 2 = 3 
left = "0111" and right = "01", score = 1 + 1 = 2 
left = "01110" and right = "1", score = 2 + 1 = 3 */

var maxScore = function (s) {
  let maxScore = 0;

  for (let i = 1; i < s.length; i++) {
    let left = s.slice(0, i);
    let right = s.slice(i);

    let leftScore = (left.match(/0/g) || []).length;
    let rightScore = (right.match(/1/g) || []).length;
    let score = leftScore + rightScore;

    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
};

console.log(maxScore("011101"));
console.log(maxScore("1111"));
