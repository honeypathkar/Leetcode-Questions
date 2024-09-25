/* 2469. Convert the Temperature
Acceptance Rate: 89.8% */

/* Test Case:
input: celsius = 36.50
Expected output: [309.65000,97.70000]
Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70. */

var convertTemperature = function (celsius) {
  var kelvin = celsius + 273.15;
  var fahren = celsius * 1.8 + 32.0;
  return [kelvin, fahren];
};

console.log(convertTemperature(36.5));
console.log(convertTemperature(122.11));
