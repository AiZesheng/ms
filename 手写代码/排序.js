// 选择排序
// const arr = [2,1,4,5,3]
// const selectSort = (arr) => {
//   for (let i=0; i<arr.length-1; i++) {
//     let minIndex = i
//     for (let j=i+1; j<arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j
//       }
//     }
//     let t = arr[i]
//     arr[i] = arr[minIndex]
//     arr[minIndex] = t
//   }
//   return arr
// }

// selectSort(arr)

// // 冒泡排序
// const arr = [2,1,4,5,3]
// const bubbleSort = (arr) => {
//   for (let i=0; i<arr.length-1; i++) {
//     for (let j=i+1; j<arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let t = arr[i] 
//         arr[i] = arr[j]
//         arr[j] = t
//       }
//     }
//   }
//   return arr
// }

// bubbleSort(arr)


// // 快速排序
// const arr = [2,1,5,4,3]
// const quickSort = (arr) => {
// 　if (arr.length <= 1) {
//     return arr
//   }
//   const midIndex = Math.floor(arr.length / 2)
//   const item = arr.splice(midIndex, 1)[0]
//   const leftList = []
//   const rightList = []
//   debugger
//   for (let i=0; i<arr.length; i++) {
//     if (arr[i] < item) {
//       leftList.push(arr[i])
//     } else {
//       rightList.push(arr[i])
//     }
//   }
//   return [...quickSort(leftList), item, ...quickSort(rightList)]
// }

// quickSort(arr)

// // 归并排序
// const arr = [2,1,4,3,5]
// const mergeSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr
//   }
//   const midIndex = Math.floor(arr.length / 2)
//   const left = arr.slice(0, midIndex)
//   const right = arr.slice(midIndex)
//   return merge(mergeSort(left), mergeSort(right))
// }

// const merge = (left, right) => {
//   const result = []
//   while(left.length && right.length) {
//     if (left[0] <= right[0]) {
//       result.push(left.shift())
//     } else {
//       result.push(right.shift())
//     }
//   }
//   while(left.length) {
//     result.push(left.shift())
//   }
//   while(right.length) {
//     result.push(right.shift())
//   }
//   return result
// }

// mergeSort(arr)



