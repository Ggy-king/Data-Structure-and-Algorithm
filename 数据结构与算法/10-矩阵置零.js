// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

 

// 示例 1：


// 输入：matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// 输出：[[1, 0, 1], [0, 0, 0], [1, 0, 1]]
// 示例 2：


// 输入：matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
// 输出：[[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


var setZeroes = function (matrix) {
    // 解法一 但复杂度太高
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                // 同行非0预置为0
                for (let k = 0; k < m; k++) {
                    if (matrix[k][j] !== 0) {
                        matrix[k][j] = 'will be 0';
                    }
                }
                // 同列非0预置为0
                for (let l = 0; l < n; l++) {
                    if (matrix[i][l] !== 0) {
                        matrix[i][l] = 'will be 0';
                    }
                }
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 'will be 0') {
                matrix[i][j] = 0;
            }
        }
    }

    // 解法二
    // const m = matrix.length, n = matrix[0].length;
    // let flagCol0 = false, flagRow0 = false;//表示第一行和第一列有没有0
    // for (let i = 0; i < m; i++) {//寻找第一列是否存在0
    //     if (matrix[i][0] === 0) {
    //         flagCol0 = true;
    //     }
    // }
    // for (let j = 0; j < n; j++) {
    //     if (matrix[0][j] === 0) {
    //         flagRow0 = true;
    //     }
    // }
    // for (let i = 1; i < m; i++) {//循环矩阵，如果遇见0，将和这个网格相同的第一行和第一列的元素标记成0
    //     for (let j = 1; j < n; j++) {
    //         if (matrix[i][j] === 0) {
    //             matrix[i][0] = matrix[0][j] = 0;
    //         }
    //     }
    // }
    // for (let i = 1; i < m; i++) {//循环矩阵，如果当前网格对应的第一行和第一列是0，则将这个单元格置为0
    //     for (let j = 1; j < n; j++) {
    //         if (matrix[i][0] === 0 || matrix[0][j] === 0) {
    //             matrix[i][j] = 0;
    //         }
    //     }
    // }
    // if (flagCol0) {//如果第一列有0 ，则将这第一列全部置为0
    //     for (let i = 0; i < m; i++) {
    //         matrix[i][0] = 0;
    //     }
    // }
    // if (flagRow0) {//如果第一行有0 ，则将这第一行全部置为0
    //     for (let j = 0; j < n; j++) {
    //         matrix[0][j] = 0;
    //     }
    // }


};