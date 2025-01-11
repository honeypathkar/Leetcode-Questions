/* 2744. Find Maximum Number of String Pairs
Acceptance Rate: 81.3% */

/* Test Case:
input: words = ["cd","ac","dc","ca","zz"]
Expected output: 2
Explanation: In this example, we can form 2 pair of strings in the following way:
- We pair the 0th string with the 2nd string, as the reversed string of word[0] is "dc" and is equal to words[2].
- We pair the 1st string with the 3rd string, as the reversed string of word[1] is "ca" and is equal to words[3].
It can be proven that 2 is the maximum number of pairs that can be formed. */

// Method 1 O(N^2)

var maximumNumberOfStringPairs1 = function (words) {
  let ans = [];
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] == words[j].split("").reverse().join("")) {
        ans.push([words[i], words[j]]);
      }
    }
  }
  return ans.length;
};

// Method 2 O(N)

var maximumNumberOfStringPairs2 = function (words) {
  let ans = new Set();
  let count = 0;

  for (let word of words) {
    let reverseWord = word.split("").reverse().join("");
    if (ans.has(reverseWord)) {
      count++;
      ans.delete(reverseWord);
    } else {
      ans.add(word);
    }
  }
  return count;
};

console.log(maximumNumberOfStringPairs1(["cd", "ac", "dc", "ca", "zz"]));
console.log(maximumNumberOfStringPairs2(["cd", "ac", "dc", "ca", "zz"]));
