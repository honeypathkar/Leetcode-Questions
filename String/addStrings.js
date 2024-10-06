/* 415. Add Strings 
Acceptance Rate: 51.6% */

/* Test Case:
input: num1 = "11", num2 = "123"
Expected output: "134"
Explanation : When we add 11 + 123 so the answer become "134" */

var addString = function (num1, num2) {
  let bigNum1 = BigInt(num1);
  let bigNum2 = BigInt(num2);
  let sum = bigNum1 + bigNum2;
  return sum.toString();
};

console.log(addString("11", "123"));
console.log(addString("456", "77"));
