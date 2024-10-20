/* 1154. Day of the Year
Acceptance Rate: 49.0% */

/* Test Case:
input: date = "2019-01-09"
Expected output: 9
Explanation: Given date is the 9th day of the year in 2019. */

var dayOfYear = function (date) {
  const [year, month, day] = date.split("-").map(Number);
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  if (isLeapYear) {
    daysInMonth[1] = 29;
  }

  let totalDays = 0;
  for (let i = 0; i < month - 1; i++) {
    totalDays += daysInMonth[i];
  }

  totalDays += day;

  return totalDays;
};

console.log(dayOfYear("2019-01-09"));
console.log(dayOfYear("2024-10-20"));
