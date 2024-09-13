/* 13. Roman to Integer
Acceptance Rate: 62.6% */

/* Test Case:
input: s = "MCMXCIV"
Expected output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. */

var romanToInt = function (s) {
  let romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanMap[s[i]];

    if (currentValue >= prevValue) {
      total += currentValue;
    } else {
      total -= currentValue;
    }

    prevValue = currentValue;
  }
  return total;
};

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LVIII"));
