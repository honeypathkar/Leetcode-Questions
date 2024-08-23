/* 2011. Final Value of Variable After Performing Operations
Acceptance Rate: 89.4% */

/* Test Case:
input: operations = ["--X","X++","X++"]
Expected output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1. */

var finalValueAfterOperations = function (operations) {
  let x = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "--X" || operations[i] === "X--") {
      x = x - 1;
    } else if (operations[i] === "X++" || operations[i] === "++X") {
      x = x + 1;
    }
  }
  return x;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
