// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 还是动态规划问题
    let result = 0
    let res = prices[0]

    for (let i = 0, len = prices.length; i < len; i++) {
        res = Math.min(res, prices[i])
        result = Math.max(result, prices[i] - res)
    }
    return result
};