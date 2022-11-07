// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

// 如果可以，返回 true ；否则返回 false 。

// magazine 中的每个字符只能在 ransomNote 中使用一次。

 

// 示例 1：

// 输入：ransomNote = "a", magazine = "b"
// 输出：false
// 示例 2：

// 输入：ransomNote = "aa", magazine = "ab"
// 输出：false
// 示例 3：

// 输入：ransomNote = "aa", magazine = "aab"
// 输出：true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    // 判断长度
    if (ransomNote.length > magazine.length) {
        return false
    }


    // 以数字的形式存进去
    const arr = Array(26).fill(0)
    for (const a of magazine) {
        arr[a.charCodeAt() - 'a'.charCodeAt()]++
    }

    // 判断相减后是否小于0
    for (const a of ransomNote) {
        arr[a.charCodeAt() - 'a'.charCodeAt()]--
        if (arr[a.charCodeAt() - 'a'.charCodeAt()] < 0) {
            return false
        }
    }
    return true
};