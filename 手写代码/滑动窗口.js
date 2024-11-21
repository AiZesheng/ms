// 用双指针配合哈希表

// 无重复字符串的最长子串
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const box = new Set()
  let left = 0
  let ans = 0
  for (let right=0; right<s.length; right++) {
    const item = s[right]
    while(box.has(item)) {
      box.delete(s[left])
      left++
    }
    box.add(item)
    ans = Math.max(ans, right - left + 1)
  }
  return ans
};