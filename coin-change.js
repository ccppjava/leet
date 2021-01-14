/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) {
        return 0;
    }

    if (coins.indexOf(amount) >= 0) {
        return 1;
    }

    var maxCoin = Math.max(coins);
    if (amount % maxCoin === 0) {
        return amount / maxCoin;
    }

    coins = coins.filter(coin => coin < amount);
    if (amount % 2 === 1 && coins.filter(coin => coin % 2 === 1).length === 0) {
        // not possible to create odd number with all even coins
        return -1;
    }

    coins = [...new Set(coins)].sort((a,b) => b - a);

    var count = -1;
    var dp = new Map();

    searchCoin(amount, 0)
    
    function searchCoin(total, sum) {
        if (dp.has(total) && dp.get(total) <= sum) {
            return;
        }

        dp.set(total, sum);

        // console.log(total, sum);
        if (count > 0 && sum >= count) {
            return;
        }

        if (total === 0) {
            if (sum < count || count < 0) {
                count = sum;
            }

            return;
        }

        for (var i = 0; i < coins.length; i++) {
            if (total >= coins[i]) {
                searchCoin(total - coins[i], sum + 1);
            }
        }
    }

    return count;
};

// var result = coinChange([1,2,2,5], 11);
// console.log(result);

// result = coinChange([2,4,8], 11);
// console.log(result);

// result = coinChange([1], 1);
// console.log(result);

result = coinChange([1,2,5], 100);
console.log(result);