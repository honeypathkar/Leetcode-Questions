/* 2651. Calculate Delayed Arrival Time
Acceptance Rate: 78.5% */

/* Test Case:
input: arrivalTime = 13, delayedTime = 11
Expected output: 0
Explanation: Arrival time of the train was 13:00 hours. It is delayed by 11 hours. Now it will reach at 13+11=24 (Which is denoted by 00:00 in 24 hours format so return 0). */

var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  let trainDelayed = (arrivalTime + delayedTime) % 24;
  return trainDelayed;
};

console.log(findDelayedArrivalTime(13, 11));
console.log(findDelayedArrivalTime(14, 13));
