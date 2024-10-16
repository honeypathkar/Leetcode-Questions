/* 877. Stone Game 
Acceptance Rate: 71.2% */

/* Test Case:
input: piles = [5,3,4,5]
Expected output: true
Explanation: 
Alice starts first, and can only take the first 5 or the last 5.
Say she takes the first 5, so that the row becomes [3, 4, 5].
If Bob takes 3, then the board is [4, 5], and Alice takes 5 to win with 10 points.
If Bob takes the last 5, then the board is [3, 4], and Alice takes 4 to win with 9 points.
This demonstrated that taking the first 5 was a winning move for Alice, so we return true. */

var stoneGame = function (piles) {
  piles.sort((a, b) => b - a);
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < piles.length; i++) {
    if (i % 2 === 0) {
      sumEven += piles[i];
    } else {
      sumOdd += piles[i];
    }
  }
  return sumEven > sumOdd ? true : false;
};

console.log(stoneGame([5, 3, 4, 5]));
console.log(stoneGame([3, 7, 2, 3]));
