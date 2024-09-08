/* 520. Detect Capital
Accepatance Rate: 56.4% */

/* Test Case:
input: word = "USA"
Expected output: true 
Explanation: If a string contain whole capital letter or small letter than the output will be true or 
the string first word is Capital than it also return true else false*/

var detectCapitalUse = function (word) {
  let str = word.toUpperCase();

  if (word === str) {
    return true;
  }

  if (word.toLowerCase() === word) {
    return true;
  }

  if (
    word[0] === word[0].toUpperCase() &&
    word.slice(1).toLowerCase() === word.slice(1)
  ) {
    return true;
  }

  return false;
};

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("FLaG"));
