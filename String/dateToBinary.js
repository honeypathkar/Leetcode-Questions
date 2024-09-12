/* 3280. Convert Date To Binary
Acceptance Rate: 87.8% */

/* Test Case:
input: date = "2080-02-29"
Expected output: "100000100000-10-11101"
Explanation:
100000100000, 10, and 11101 are the binary representations of 2080, 02, and 29 respectively. */

var convertDateToBinary = function (date) {
  let yy = parseInt(date.substring(0, 4), 10);
  let mm = parseInt(date.substring(5, 7), 10);
  let dd = parseInt(date.substring(8, date.length), 10);
  return yy.toString(2) + "-" + mm.toString(2) + "-" + dd.toString(2);
};

console.log(convertDateToBinary("2080-02-29"));
console.log(convertDateToBinary("1900-01-01"));
