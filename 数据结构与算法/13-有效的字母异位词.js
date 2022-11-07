// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。



// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    // 元素表
    // if(s.length !== t.length) {
    //     return false
    // }

    // const arr = Array(26).fill(0)
    // for(const a of s){
    //     arr[a.charCodeAt() - 'a'.charCodeAt()]++
    // }

    // for(const a of t) {
    //     arr[a.charCodeAt() - 'a'.charCodeAt()]--
    //     if(arr[a.charCodeAt() - 'a'.charCodeAt()] < 0) {
    //         return false
    //     }
    // }
    // return true

    // es6
    return s.length == t.length && [...s].sort().join('') == [...t].sort().join('')
};