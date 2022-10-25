// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // 使用动态规划做的核心就是抓住尾节点
    let ans = nums[0]
    let sum = 0
    for (let num of nums) {
        if (sum > 0) {
            sum = sum + num
        } else {
            sum = num
        }
        ans = Math.max(ans, sum)
    }
    return ans

    // 暴力解法
    // let max = nums[0]
    // for(let i = 0;i < nums.length;i++) {
    //     for(let j = i;j < nums.length;j++) {
    //         let sum = 0
    //         for(let k = i;k <= j;k++) {
    //             sum = sum + nums[k]
    //         }
    //         max = Math.max(max,sum)
    //     }
    // }
    // return max
};