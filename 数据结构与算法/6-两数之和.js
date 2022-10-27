// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 暴力解法
    // for(let i = 0 , len = nums.length;i <= len;i++){
    //     for(let j = i + 1;j <= nums.length;j++){
    //         if(nums[i] + nums[j] == target) {
    //             return [i,j]
    //         }
    //     }
    // }

    // 哈希表解法
    // 一层判断直接找出符合条件的 不符合的存入哈希表留下一次使用
    let newNums = new Map()
    for (let i = 0, len = nums.length; i <= len; i++) {
        if (newNums.has(target - nums[i])) {
            return [newNums.get(target - nums[i]), i]
        } else {
            newNums.set(nums[i], i)
        }
    }

};