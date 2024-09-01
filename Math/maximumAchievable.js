/* 2769. Find the Maximum Achievable Number
Accepatance Rate: 90.8% */

/* Test Case:
input: num = 4, t = 1
Expected output: 6
Explanation:
Apply the following operation once to make the maximum achievable number equal to num:
Decrease the maximum achievable number by 1, and increase num by 1. */

var theMaximumAchievableX = function (num, t) {
  return num + t * 2;
};

console.log(theMaximumAchievableX(4, 1));
console.log(theMaximumAchievableX(3, 2));
