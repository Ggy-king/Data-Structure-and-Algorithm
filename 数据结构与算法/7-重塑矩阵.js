// 在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。

// 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。

// 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。

// 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    // let newArr = []
    // let newArr2 = []
    // // 判断
    // function sum(mat){
    //     for(let num of mat){
    //         if(Array.isArray(num)){
    //             sum(num)
    //         } else {
    //             newArr.push(num)
    //         }
    //     }
    // }
    // sum(mat)
    // // 转数组
    // function aeeT(r,c){
    //     for (var i = 0; i < r; i++) {  
    //     let arr = []
    //     for (var j = 0; j < c; j++) {
    //         arr[j] = newArr[i * c + j]
    //     }
    //     newArr2.push(arr)
    //   }
    // }

    // if(newArr.length != (r * c)){
    //     return mat
    // } else {
    //     aeeT(r,c)
    //     return newArr2
    // }


    // 一个长脑子的简单做法 使用flat map slice
    const arr = mat.flat()
    if (r * c != arr.length) return mat
    return [...Array(r).keys()].map(i => arr.slice(i * c, i * c + c))
};










