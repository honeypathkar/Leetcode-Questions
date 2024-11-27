/* 495. Teemo Attacking
Acceptance Rate: 56.8% */

/* Test Case:
input: timeSeries = [1,4], duration = 2
Expected output: 4
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total. */

var findPoisonedDuration = function (timeSeries, duration) {
  if (duration === 0 || timeSeries.length === 0) {
    return 0;
  }
  let totalDuration = 0;
  for (let i = 1; i < timeSeries.length; i++) {
    totalDuration += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
  }
  return totalDuration + duration;
};

console.log(findPoisonedDuration([1, 4], 2));
console.log(findPoisonedDuration([1, 2], 2));
