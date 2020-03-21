// 题目: 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 示例 1:
// 输入: s = "anagram", t = "nagaram"
// 输出: true

// 示例 2:
// 输入: s = "rat", t = "car"
// 输出: false

// 说明: 你可以假设字符串只包含小写字母。

// 解法1: 哈希表
/**
 * 
 * @param {String} s 
 * @param {String} t 
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 判断两个字符串的长度是否相等
  if (s.length !== t.length) {
    return false
  }

  const obj = {}

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] ? obj[s[i]]++ : (obj[s[i]] = 1)
    obj[t[i]] ? obj[t[i]]-- : (obj[t[i]] = -1)
  }

  return Object.keys(obj).every(item => obj[item] === 0)
}

console.log(isAnagram('anagram', 'nagaram'))