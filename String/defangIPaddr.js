/* 1108. Defaining an IP Address
Acceptance Rate: 89.3% */

/* Test Case:
input: address = "1.1.1.1"
Expected output: "1[.]1[.]1[.]1" */

var defangIPaddr = function (address) {
  let ipAddress = address.replaceAll(".", "[.]");
  return ipAddress;
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));
