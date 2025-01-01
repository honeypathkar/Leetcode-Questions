/* 1688. Count of Matches in Tournament
Acceptance Rate: 85.8% */

/* Test Case:
input: n = 7
Expected output: 6
Explanation: Details of the tournament: 
- 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
- 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
Total number of matches = 3 + 2 + 1 = 6. */

var numberOfMatches = function (n) {
  let matches = 0;
  while (n > 1) {
    let match = Math.floor(n / 2);
    matches += match;
    n = n - match;
  }
  return matches;
};

console.log(numberOfMatches(7));
console.log(numberOfMatches(14));
