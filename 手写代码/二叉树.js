// 基础知识：深度优先是前中后续遍历(根左右、左根右、左右根)，广度优先遍历就是层序遍历，层序遍历不用递归

// 一般情况碰到二叉树就用递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 给一个数组，根据前遍历生成二叉树
const getTree = (arr) => {
  if (!arr.length) {
    return null
  }
  const rootValue = arr.shift()
  const root = new TreeNode(rootValue)
  root.left = getTree(arr)
  root.right = getTree(arr)
  return root
}

const tree = getTree([5,1,4,null,null,3,6])

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 二叉树的中序遍历
var inorderTraversal = function(root) {
  const res = [];
  const inorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return res;
};

// 二叉树的层序遍历
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return []
  }
  const ans = []
  let arr = [root]
  while(arr.length) {
    let vals = []
    let next = []
    arr.forEach(item => {
      vals.push(item.val)
      item.left && next.push(item.left)
      item.right && next.push(item.right)
    })
    arr = next
    ans.push(vals)
  }
  return ans
};

// 翻转二叉树
var invertTree = function(root) {
  if (!root) {
    return null
  }
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
};

// 判断对称二叉树
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const isSameTree = (p, q) => {
    if (p === null || q === null) {
      return p === q
    }
    return p.val === q.val && isSameTree(p.left, q.right) && isSameTree(p.right, q.left)
  }
  return isSameTree(root.left, root.right)
};

// 判断一颗树是否为另一颗树的子树
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  const isSameTree = (p, q) => {
    if (p === null || q === null) {
      return p === q
    }
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
  if (!root) {
    return false
  }
  return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

// 二叉树的最大深度
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  const left = maxDepth(root.left)
  const right = maxDepth(root.right)
  return Math.max(left, right) + 1
};

// 判断是否为平衡二叉树(左右子节点的深度不超过1)
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let ans = true
  const getDeepth = (root) => {
    if (!root) {
      return 0
    }
    const left = getDeepth(root.left)
    const right = getDeepth(root.right)
    if (Math.abs(left - right) > 1) {
      ans = false
    }
    return Math.max(left, right) + 1
  }
  getDeepth(root)
  return ans
};

// 合并二叉树
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  if (!root1 || !root2) {
    return root1 || root2
  }
  const root3 = new TreeNode(-1)
  // 如果节点重叠，相加
  if (root1.val && root2.val) {
    root3.val = root1.val + root2.val
  } else {
    root3.val = root1.val || root2.val
  }
  root3.left = mergeTrees(root1.left, root2.left)
  root3.right = mergeTrees(root1.right, root2.right)
  return root3
};

// 叶子相似的树 (可以拿到树的最后一层节点值)
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var leafSimilar = function(root1, root2) {
  const getLastDeppthVal = (root, arr) => {
    if (!root) {
      return
    }
    if (!root.left && !root.right) {
      arr.push(root.val)
    } else {
      getLastDeppthVal(root.left, arr)
      getLastDeppthVal(root.right, arr)
    }
  }
  const arr1 = []
  const arr2 = []
  getLastDeppthVal(root1, arr1)
  getLastDeppthVal(root2, arr2)
  return arr1.join() === arr2.join()
};

// 给定一个有序数组，创建一颗高度最小的搜索二叉树
// 搜索二叉树就是左子节点全部小于根节点，右子节点全部大于根节点
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) {
    return null
  }
  const mid = Math.floor(nums.length / 2)
  const ans = new TreeNode(nums[mid])
  ans.left = sortedArrayToBST(nums.slice(0, mid))
  ans.right = sortedArrayToBST(nums.slice(mid + 1)) // 这里是mid+1是因为数组中间的那个值给到根的val了
  return ans
};

// 二叉搜索树的公共祖先(不用递归)
// 思路：如果当前节点值大于p,q，说明p,q都在左子树，否则p,q都在右子树，如果分叉，表示当前就是公共祖先
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let current = root
  while(current) {
    if (current.val > p.val && current.val > q.val) {
      current = current.left
    } else if (current.val < p.val && current.val < q.val) {
      current = current.right
    } else {
      return current
    }
  }
  return current
};

// 二叉搜索树的最近公共祖先(用递归)
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const val = root.val
  if (p.val < val && q.val < val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  if (p.val > val && q.val > val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  return root
};

// 任意二叉树的公共祖先(用递归)
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root || !p || !q) {
    return root
  }
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (left && right) {
    return root
  }
  if (left) {
    return left
  }
  return right
};

// 判断二叉树是否为二叉搜索树
// 思路：二叉搜索树中序遍历的结果应该是递增的
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  const list = []
  let ans = true
  const inorder = (root) => {
    if (!root) {
      return
    }
    inorder(root.left)
    if (list.length && root.val <= list[list.length - 1]) {
      ans = false
    }
    root.val && list.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return ans
};

// 二叉树的直径
// 思路：计算左右子树的最大深度的时候顺便把直径加起来
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let ans = 0
  const getMaxDeep = (root) => {
    if (!root) {
      return 0
    }
    const leftLength = getMaxDeep(root.left)
    const rightLength = getMaxDeep(root.right)
    ans = Math.max(ans, leftLength + rightLength)
    return Math.max(leftLength, rightLength) + 1
  }
  getMaxDeep(root)
  return ans
};

// 二叉树的最大路径和
// 思路：求左右子树的最大路径和
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let ans = -Infinity
  const dfs = (root) => {
    if (!root) {
      return 0
    }
    let leftVal = dfs(root.left)
    let rightVal = dfs(root.right)
    ans = Math.max(ans, leftVal + rightVal + root.val)
    const res = Math.max(leftVal, rightVal) + root.val
    return Math.max(res, 0)
  }
  dfs(root)
  return ans
};



