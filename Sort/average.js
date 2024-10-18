/* 1491. Average Salary Excluding the Minimum and Maximum Salary
Accetance Rate: 63.5% */

/* Test Case:
input: salary = [4000,3000,1000,2000]
Expected output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500 */

var average = function (salary) {
  let maxSalary = Math.max(...salary);
  let minSalary = Math.min(...salary);
  salary.splice(salary.indexOf(maxSalary), 1);
  salary.splice(salary.indexOf(minSalary), 1);

  let total = salary.reduce((acc, curr) => acc + curr, 0);
  return total / salary.length;
};

console.log(average([4000, 3000, 1000, 2000]));
console.log(average([1000, 2000, 3000]));
