/* 1450. Number of Students Doing Homework at a Given Time
Acceptance Rate: 75.7% */

/* Test Case:
input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
Expected output: 1
Explanation: We have 3 students where:
The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4. */

var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      count++;
    }
  }
  return count;
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
