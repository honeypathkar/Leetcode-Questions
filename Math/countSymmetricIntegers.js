/* 2843. Count Symmetric Integers
Acceptance Rate: 74.2% */

/* Test Case:
input: low = 1, high = 100
Ecpected output: 9
Explanation: There are 9 symmetric integers between 1 and 100: 11, 22, 33, 44, 55, 66, 77, 88, and 99. */

var countSymmetricIntegres = function (low, high) {
  let count = 0;
  let sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

  for (let i = low; i <= high; i++) {
    let num = i.toString().split("").map(Number);
    let len = num.length;

    if (len % 2 === 0) {
      let half = len / 2;
      let firstHalf = num.slice(0, half);
      let secondHalf = num.slice(half);

      let firstHalfSum = sum(firstHalf);
      let secondHalfSum = sum(secondHalf);

      if (firstHalfSum === secondHalfSum) {
        count++;
      }
    }
  }
  return count;
};

console.log(countSymmetricIntegres(1, 100));
console.log(countSymmetricIntegres(1200, 1230));
