/* 989. Add to Array-Form of Integer
Acceptance Rate: 45.1% */

/* Test Case:
input: num = [1,2,0,0], k = 34
Expected output: [1,2,3,4]
Explanation: 1200 + 34 = 1234 */

var addToArrayForm = function (num, k) {
  let str = num.join("");
  let val = BigInt(str);
  let ans = (val + BigInt(k)).toString().split("");

  return ans;
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([2, 1, 5], 806));
