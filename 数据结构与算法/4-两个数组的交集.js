// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数
// 应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {

    //   哈希表做法 从后向前推
    const map = []
    const res = []
    if (nums1.length < nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    for (const num1 of nums1) {
        if (map[num1]) {
            map[num1]++
        } else {
            map[num1] = 1
        }
    }
    for (const num2 of nums2) {
        const val = map[num2]
        if (val > 0) {
            res.push(num2)
            map[num2]--
        }

    }
    return res

    // 双指针做法 p1与p2比较大的后移小的前移
    // nums1.sort((a, b) => a - b);
    // nums2.sort((a, b) => a - b); //排序两个数组
    // const res = [];
    // let p1 = 0;//指向nums1中的元素
    // let p2 = 0;//指向nums2中的元素
    // while (p1 < nums1.length && p2 < nums2.length) {//不越界条件
    //     if (nums1[p1] > nums2[p2]) {//p1指向的元素大，移动p2
    //         p2++;
    //     } else if (nums1[p1] < nums2[p2]) {//p2指向的元素大，移动p1
    //         p1++;
    //     } else {
    //         //遇到相同则加入入res，移动两指针
    //         res.push(nums1[p1]);
    //         p1++;
    //         p2++;
    //     }
    // }
    // return res;


};




