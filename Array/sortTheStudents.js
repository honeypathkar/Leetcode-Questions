/* 2545. Sort the Students by Their Kth Score
Acceptance Rate: 85.6% */

/* Test Case:
input: score = [[10,6,9,1],[7,5,11,2],[4,8,3,15]], k = 2
Expected output: [[7,5,11,2],[10,6,9,1],[4,8,3,15]]
Explanation: In the above diagram, S denotes the student, while E denotes the exam.
- The student with index 1 scored 11 in exam 2, which is the highest score, so they got first place.
- The student with index 0 scored 9 in exam 2, which is the second highest score, so they got second place.
- The student with index 2 scored 3 in exam 2, which is the lowest score, so they got third place. */

var sortTheStudents = function (score, k) {
  let heap = [...score];
  heap.sort((a, b) => b[k] - a[k]);
  return heap;
};

console.log(
  sortTheStudents(
    [
      [10, 6, 9, 1],
      [7, 5, 11, 2],
      [4, 8, 3, 15],
    ],
    2
  )
); // [[7,5,11,2],[10,6,9,1],[4,8,3,15]]
console.log(
  sortTheStudents(
    [
      [3, 4],
      [5, 6],
    ],
    0
  )
); // [[5,6],[3,4]]
