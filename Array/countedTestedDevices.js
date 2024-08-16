/* 2960. Count Tested Devices After Test Operations
Acceptance Rate: 80.8% */

/* Test Case:
input: batteryPercentages = [0,1,2]
Expected output: 2
Explanation: Performing the test operations in order starting from device 0:
At device 0, batteryPercentages[0] == 0, so we move to the next device without testing.
At device 1, batteryPercentages[1] > 0, so there is now 1 tested device, and batteryPercentages becomes [0,1,1].
At device 2, batteryPercentages[2] > 0, so there are now 2 tested devices, and batteryPercentages stays the same.
So, the answer is 2. */

var countTestedDevices = function (batteryPercentages) {
  let count = 0;
  let n = batteryPercentages.length;
  let nums = batteryPercentages;
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      count++;
      for (let j = i + 1; j < n; j++) {
        nums[j] = nums[j] - 1;
      }
    }
  }
  return count;
};

console.log(countTestedDevices([0, 1, 2]));
console.log(countTestedDevices([1, 1, 2, 1, 3]));
