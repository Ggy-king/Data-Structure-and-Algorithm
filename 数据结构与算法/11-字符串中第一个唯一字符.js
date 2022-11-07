// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 - 1 。

 

// 示例 1：

// 输入: s = "leetcode"
// 输出: 0
// 示例 2:

// 输入: s = "loveleetcode"
// 输出: 2
// 示例 3:

// 输入: s = "aabb"
// 输出: -1

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    // es6简写
    // const arr = _.countBy(s)
    // for(const [i,ch] of Array.from(s).entries()){
    //     if(arr[ch] === 1) {
    //         return i
    //     }
    // }
    // return -1

    // 哈希表解法
    // 创建对象
    let arr = new Map()

    // 统计次数
    for (let i = 0, len = s.length; i < len; i++) {
        let word = s.charAt(i)
        let value = arr.get(word)
        if (arr.has(word)) {
            arr.set(word, value + 1)
        } else {
            arr.set(word, 1)
        }
    }
    // 查找
    for (let i = 0, len = s.length; i < len; i++) {
        if (arr.get(s.charAt(i)) === 1) {
            return i
        }
    }
    return -1

};