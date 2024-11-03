/* 728. Self Dividing Numbers
Acceptance Rate: 79.1% */

/* Test Case:
input: left = 1, right = 22
Expected output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
Explanation: A self-dividing number is a number that is divisible by every digit it contains.
For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0. */

var selfDividingNumbers = function (left, right) {
  let arr = [];
  for (let i = left; i <= right; i++) {
    let num = i;
    let isSelfDividing = true;

    while (num > 0) {
      let digit = num % 10;
      if (digit === 0 || i % digit !== 0) {
        isSelfDividing = false;
        break;
      }
      num = Math.floor(num / 10);
    }

    if (isSelfDividing) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(selfDividingNumbers(1, 22));
console.log(selfDividingNumbers(47, 85));
