// js 数组方法操作
let a1 = [1, 2, 3, 4, 5]
let a2 = [2, 3, 4, 5, 6, 7, 8, 9]
let a3 = a1
let a4 = [...a1]
let a5 =new Set(a1)
a3[0] = 100
// console.log(a1);
// console.log(a4);

// console.log(a5);

// // 求数组a1,a2的并集
// let a12 = Array.from(new Set([...a1, ...a2]))
// console.log(a12);

// 求  a1 a2的交集
// let a1_2 = Array.from(new Set([...a1].filter(n =>a2.has(n))))
// console.log(a1_2);

// 求 a1 a2的差集