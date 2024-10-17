/* 121. Best Time to Buy and Sell Stock
acceptance Rate: 54.3% */

/* Test Case:
input: prices = [7,1,5,3,6,4]
Expected output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell. */

var maxProfit = function (prices) {
  let buyPr = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (buyPr > prices[i]) {
      buyPr = prices[i];
    }

    profit = Math.max(profit, prices[i] - buyPr);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
