// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function(amount, coins, memo = {}) {
  let key = amount + "_" + coins;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;
  let ways = 0;

  let currentCoin = coins[coins.length - 1];

  for (let qty = 0; currentCoin * qty <= amount; qty++) {
    const nextAmt = amount - currentCoin * qty;
    const nextCoins = coins.slice(0, -1);
    ways += change(nextAmt, nextCoins, memo);
  }
  memo[key] = ways;
  console.log(memo);
  return memo[key];
};

let amount = 5;
let coins = [1, 2, 5];
console.log(change(amount, coins));
