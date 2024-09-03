// 实现一个 add 方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add(...args) {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  const _args = args.slice()

  // 在内部声明一个函数，利用闭包的特性保存 _args 并收集所有的参数值
  const _adder = function () {
    _args.push(...arguments);
    return _adder;
  };

  // 利用 toString 隐式转换的特性，当最后执行时显式或隐式调用这个函数，返回 _args 的累加和
  _adder.toString = function () {
    return _args.reduce((pre, cur) => pre + cur);
  }

  // 这个 return 是第一次调用的时候返回上面的函数体，
  // 这样后面所有的括号再执行的时候就是执行 _adder 函数体
  return _adder;
}

// 我们可以显式或隐式调用这个函数
// 1 显式使用 toString() 方法
console.log(add(1)(2)(3).toString()); // 输出数字： 6
console.log(add(1, 2, 3)(4).toString()); // 输出数字： 10
// 2 隐式转换自动调用 toString() 方法
console.log(''+add(1)(2)(3)(4)(5)); // 输出字符串： '15'
console.log(String(add(2, 6)(1))); // 输出字符串： '9'
alert(add(1, 2, 3)(4)) // 输出字符串： '10'