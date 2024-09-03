// 缓存函数
// const memoizeOne = (fn) => {
//   const catchObj = {}
//   const resultFn = (...args) => {
//     if (isEqual(catchObj.lastArgs, args)) {
//       return catchObj.lastResult;
//     }
//     const result = fn.apply(null, args)
//     catchObj.lastArgs = args
//     catchObj.result = result
//     return result
//   }
//   return resultFn
// }

// // 找出两个字符串的最长子串
// const findCommonMaxStr = (str1, str2) => {
//   let maxStr
//   let minStr
//   if (str1.length > str2.length) {
//     maxStr = str1
//     minStr = str2
//   } else {
//     maxStr = str2
//     minStr = str1
//   }
//   for (let i=minStr.length; i>0; i--) {
//     const list = splitStr(minStr, i)
//     const res = list.find(item => maxStr.includes(item))
//     if (res) {
//       return res
//     }
//   }
//   return ''
// }

// const splitStr = (str, num) => {
//   const result = []
//   for (let i=0; i<str.length; i++) {
//     const s = str.substr(i, num)
//     if (s.length === num) {
//       result.push(s)
//     } else {
//       return result
//     }
//   }
//   return result
// }

// 最长公共前缀
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// const findMinStr = (strs) => {
//   const lengthStr = strs.map(item => item.length)
//   const minLength = Math.min(...lengthStr)
//   return strs.find(item => item.length === minLength)
// }

// const isPrefix = (str, prefix) => {
//   return str.substr(0, prefix.length) === prefix
// }

// const findMaxPrefix = (strs) => {
//   const minStr = findMinStr(strs)
//   for (let i=minStr.length; i>0; i--) {
//     const s = minStr.substr(0, i)
//     const isRight = strs.every(item => isPrefix(item, s))
//     if (isRight) {
//       return s
//     }
//   }
//   return ''
// }

// findMaxPrefix(["reflower","flow","flight"])


// 有效的括号
// '({})' '(()' '(})'
// const isValid = (str) => {
//   if (str.length % 2 !== 0) {
//     return false
//   }
//   const box = []
//   const leftList = ['(', '[', '{']
//   const map = {
//     ')': '(',
//     '}': '{',
//     ']': '['
//   }
//   for (let i=0; i<str.length; i++) {
//     const item = str[i]
//     const isLeft = leftList.includes(item)
//     if (isLeft) {
//       box.push(item)
//     } else {
//       if (box.length === 0) {
//         return false
//       }
//       const targetLeft = map[item]
//       if (box[box.length - 1] === targetLeft) {
//         box.pop()
//       } else {
//         return false
//       }
//     }
//   }
//   return box.length === 0
// }

// isValid("([)]")
// isValid("{[]}")
// isValid("(){}[]")

// 生成6位的无重复的验证码
// const getRandom = () => {
//   const list = []
//   while(list.length < 6) {
//     const random = Math.floor(Math.random() * 10)
//     if (!list.includes(random)) {
//       list.push(random)
//     }
//   }
//   return list.join('')
// }

// 1 1
// 2 2
// 3 3
// 4 5  1111 112 121 211 22
// 5 8  11111 1112 1121 1211 2111 122 212 221 

// 递归法，时间复杂度高
// var climbStairs = function(n) {
//   if (n === 1) {
//     return 1
//   }
//   if (n === 2) {
//     return 2
//   }
//   return climbStairs(n-1) + climbStairs(n-2)
// };

// 动态规划法
// var climbStairs = function(n) {
//   let p = 0
//   let q = 0
//   let r = 1
//   for (let i=0;i<n;i++) {
//     p = q
//     q = r
//     r = p+q
//   }
//   return r
// };


// 无重复字符串的最长子串
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// var lengthOfLongestSubstring = function(s) {
//   if (!s) {
//     return 0
//   }
//   // 根据个数分割字符串函数
//   const splitStr = (num) => {
//     const result = []
//     for (let i=0; i<=s.length; i++) {
//       const str = s.substr(i, num)
//       if (str.length === num) {
//         result.push(str)
//       } else {
//         return result
//       }
//     }
//     return result
//   }
//   // 判断是否有重复字符函数
//   const hasRepeat = (s) => {
//     const obj = {}
//     for (let i=0;i<s.length;i++) {
//       const item = s[i]
//       if (obj[item]) {
//         return true
//       }
//       obj[item] = true
//     }
//     return false
//   }
//   for (let i=s.length; i>0; i--) {
//     const list = splitStr(i)
//     const resStr = list.find(item => !hasRepeat(item))
//     if (resStr) {
//       return resStr.length
//     }
//   }
//   return 1
// };
// console.log(lengthOfLongestSubstring("aabaab!bb"))

// 最大子数组和
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// var maxSubArray = function(nums) {
//   let result = nums[0]
//   let pre = 0
//   for (let i=0;i<nums.length;i++) {
//     pre = Math.max(pre + nums[i], nums[i])
//     result = Math.max(result, pre)
//   }
//   return result
// };

// maxSubArray([-2,1,-3,4,-1,2,1,-5,4])

// 跳跃游戏
// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
// 输入：nums = [3,2,1,0,4]
// 输出：false
// 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
// var canJump = function(nums) {
//   let last = nums.length - 1
//   for (let i=nums.length - 2; i>=0; i--) {
//     if (i + nums[i] >= last) {
//       last = i
//     }
//   }
//   return last === 0
// };

// 判断子序列
// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。
// （例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
// 示例 1：
// 输入：s = "abc", t = "ahbgdc"
// 输出：true
// 示例 2：
// 输入：s = "axc", t = "ahbgdc"
// 输出：false
// var isSubsequence = function(s, t) {
//   let str = t
//   for (let i=0;i<s.length;i++) {
//     const item = s[i]
//     const idx = str.indexOf(item)
//     if (idx === -1) {
//       return false
//     }
//     str = str.slice(idx + 1)
//   }
//   return true
// };
// isSubsequence('aaaaa', 'baaaa')

// 最大子数组和
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

// 输入：prices = [7,1,5,3,6,4]
// 输出：7
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
// 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3。
// 最大总利润为 4 + 3 = 7 。
// 思路 只要第二天的股价比第一天的股价高就把这两天的差加上，最后就可以得出最大利润
var maxProfit = function(prices) {
  let res = 0
  for (let i=1; i<prices.length; i++) {
    res += Math.max(0, prices[i] - prices[i - 1])
  }
  return res
};
maxProfit([7,1,5,3,6,4])
