/* 2678. Number of Senior Citizens
Acceptance Rate: 80.8% */

/* Test Case:
input: details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
Expected output: 2
Explanation: The passengers at indices 0, 1, and 2 have ages 75, 92, and 40. Thus, there are 2 people who are over 60 years old. */

var countSeniors = function (details) {
  let count = 0;
  let arr = details.map((item) => item.substring(11, item.length - 2));
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) > 60) {
      count++;
    }
  }
  return count;
};

console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
);

console.log(countSeniors(["1313579440F2036", "2921522980M5644"]));
