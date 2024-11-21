// 两两交换链表节点(用递归)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head
  }
  const node1 = head
  const node2 = head.next
  const node3 = node2.next

  node1.next = swapPairs(node3)
  node2.next = node1
  return node2
};

// 两两交换链表节点 不用递归 个人思路 把两两交换后的值转成数组 再生成新链表
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head
  }
  let arr = []
  let doubleValArr = []
  let point = head
  while(point) {
    doubleValArr.push(point.val)
    if (doubleValArr.length === 2) {
      doubleValArr.reverse()
      arr = [...arr, ...doubleValArr]
      doubleValArr = []
    }
    point = point.next
  }
  // 如果链表是奇数个的情况
  if (doubleValArr.length === 1) {
    arr = [...arr, ...doubleValArr]
  }
  let ans = new ListNode(0)
  point = null
  while(arr.length) {
    const val = arr.shift()
    if (point === null) {
      ans.val = val
      point = ans
    } else {
      point.next = new ListNode(val)
      point = point.next
    }
  }
  return ans
};

// 交换链表的第k个节点与倒数第k个节点
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
  let p = head // 指针
  let front = head // 第k个节点
  let back = head // 倒数第k个节点
  let count = 1
  while(p) {
    // 找到第k个节点
    if (count === k) {
      front = p
    }
    // 当count大于k的时候back开始移动，直到p超出链表的时候就找到倒数第k个节点了
    if (count > k) {
      back = back.next
    }
    p = p.next
    count++
  }
  [front.val, back.val] = [back.val, front.val]
  return head
};

// 删除链表节点(本人想法，双指针)
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  if (!head) {
    return head
  }
  let targetNode = head
  let targetNodeNext = head
  let targetNodePrev = null
  let point = head
  let pointLeft = null
  while(point) {
    if (point.val === val) {
      targetNodePrev = pointLeft
      targetNode = point
      targetNodeNext = point.next
    }
    pointLeft = point
    point = point.next
  }
  if (targetNodePrev) {
    targetNodePrev.next = targetNodeNext
  } else {
    head = head.next
  }
  return head
};

// 判断链表中是否有环 用哈希表
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false
  }
  const s = new Set()
  let point = head
  while(point) {
    if (s.has(point)) {
      return true
    }
    s.add(point)
    point = point.next
  }
  return false
};

// 判断两个链表是否相交，如果有相交则返回相交的第一个节点，否则返回null
// 思路：哈希表，把第一个链表的所有节点都存入哈希表，遍历第二个，如果哈希表中有第二个链表的某个节点就返回该节点
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const setBox = new Set()
  let point = headA
  while(point) {
    setBox.add(point)
    point = point.next
  }
  point = headB
  while(point) {
    if (setBox.has(point)) {
      return point
    }
    point = point.next
  }
  return null
};

// 合并两个有序链表
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2
  }
  let ans = new ListNode()
  let point = ans
  while(l1 && l2) {
    let node = new ListNode()
    if (l1.val < l2.val) {
      node.val = l1.val
      l1 = l1.next
    } else {
      node.val = l2.val
      l2 = l2.next
    }
    point.next = node
    point = point.next
  }
  if (l1 || l2) {
    point.next = l1 || l2
  }
  return ans.next
};


