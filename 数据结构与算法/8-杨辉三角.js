// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // 三角很简单 不要多想
    // 第一个点 使用fill填充数组
    // 第二点 记住当前数值是上一行的i-1与i相加

    const result = []
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1)
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j]
        }
        result.push(row)
    }
    return result
};