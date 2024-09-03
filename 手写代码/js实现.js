// // call用法
// const fn1 = (obj) => {
//   console.log(obj.name)
// }

// // js实现call
// Function.prototype.call2 = function(context, ...args) {
//   if (typeof context !== 'function') {
//     throw new Error('不是函数')
//   }
//   context = context || window
//   context.fn = this
//   const res = context.fn(...args)
//   delete context.fn
//   return res
// }

// fn1.call2(fn1, { name: '123' })

// // js实现apply
// Function.prototype.apply2 = function(context, ...args) {
//   if (typeof context !== 'function') {
//     throw new Error('不是函数')
//   }
//   args = args && args[0] || []
//   context.fn = this
//   const result = context.fn(...args)
//   delete context.fn
//   return result
// }

// fn1.apply2(fn1, [{ name: '234' }])

// // js实现reduce
// Array.prototype.reduce2 = function(fn, initValue) {
//   let res = initValue
//   this.forEach((item, index) => {
//     res = fn(res, item, index, this)
//   })
//   return res
// }

// const arr = [2,1,4,3,5]
// const sum = arr.reduce2((prev, item) => {
//   return prev + item
// }, 0)
// console.log(sum)

// // 实现Promise.all 及 Promise.allSettled
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('1成功')
//     resolve(1)
//   }, 1000)
// })

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('2成功')
//     resolve(2)
//   }, 2000)
// })

// Promise.all2 = function(promiseList) {
//   return new Promise((resolve, reject) => {
//     const resList = []
//     for (let i=0; i<promiseList.length; i++) {
//       promiseList[i].then(res => {
//         resList[i] = res
//         if (resList.length === promiseList.length) {
//           resolve(resList)
//         }
//       })
//     }
//   })
// }

// Promise.all2([p1, p2]).then(res => {
//   console.log(res)
// })

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('3失败')
//     reject(3)
//   }, 3000)
// })


// Promise.allSettled2 = function(promiseList) {
//   return new Promise((resolve, reject) => {
//     const resList = []
//     for (let i=0; i<promiseList.length; i++) {
//       promiseList[i].then(res => {
//         resList[i] = { status: 'fulfilled', value: res }
//         if (resList.length === promiseList.length) {
//           resolve(resList)
//         }
//       }).catch(e => {
//         resList[i] = { status: 'rejected', reason: e }
//         resolve(resList)
//       })
//     }
//   })
// }

// Promise.allSettled2([p1,p2,p3]).then(res => {
//   console.log('allSettled', res)
// })


// // 实现isEqual
// const isEqual = (obj1, obj2) => {
//   if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
//     return obj1 === obj2
//   }
//   for (let p in obj1) {
//     if (!isEqual(obj1[p], obj2[p])) {
//       return false
//     }
//   }
//   return true
// }
// let obj1 = [{ a: 1 }]
// let obj2 = [{ a: 2 }]
// console.log(isEqual(2, obj2))

// // 实现深拷贝
// const cloneDeep = (data) => {
//   const result = Array.isArray(data) ? [] : {};
//   for (let p in data) {
//     if (typeof data[p] === "object" && data[p]) {
//       result[p] = cloneDeep(data[p]);
//     } else {
//       result[p] = data[p];
//     }
//   }
//   return result;
// };

// const data = { a: 1, b: { c: 2, d: [{ e: 2 }] } };

// console.log(cloneDeep(data));

// // 深拷贝支持循环引用
// const cloneDeep = (data, m = new Map()) => {
//   if (m.has(data)) {
//     return m.get(data);
//   }
//   const result = Array.isArray(data) ? [] : {};
//   m.set(data, result);
//   for (let p in data) {
//     if (typeof data[p] === "object" && data[p]) {
//       result[p] = cloneDeep(data[p], m);
//     } else {
//       result[p] = data[p];
//     }
//   }
//   return result;
// };

// const data = { a: 1 };
// data.b = data;

// console.log(cloneDeep(data));

// // 实现缓存函数
// const fn = (a, b) => {
//   return a + b
// }

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

// const fn2 = memoizeOne(fn)
// const res = fn2(1,2)

// console.log(res, 'sss')


