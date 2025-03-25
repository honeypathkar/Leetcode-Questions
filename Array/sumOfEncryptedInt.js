/* 3079. Find the Sum of Encrypted Integers
Acceptance Rate: 74.4% */

/* Test Case:
input: nums = [10,21,31]
Expected output: 66
Explanation: The encrypted elements are [11,22,33]. The sum of encrypted elements is 11 + 22 + 33 == 66. 
*/

var sumOfEncryptedInt = function (nums) {
  const encrypt = (num) => {
    const digits = num.toString().split("").map(Number);
    const maxDigit = Math.max(...digits);
    return Number(digits.map(() => maxDigit).join(""));
  };

  let arr = nums.map((num) => encrypt(num));
  return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumOfEncryptedInt([10, 21, 31])); //66
console.log(sumOfEncryptedInt([1, 2, 3])); //6
