//string 
const hello: string = "hello world"  //string
console.log(hello)
// number
let x: number = 10
let y: number = 0o123 //8进制
let z = 0xffd //0x 十六进制
let a = 0b1010
console.log(a, x, y, z)
// boolean 
let flag: boolean = false
console.log(flag)
// array 数组 
let arr1: number[] = [1, 2, 3, 4]
let arr2: Array<string>=['abc','bcd','efg']  //Array<type>泛型
console.log(arr1, arr2);

// 元组：已知元素数量和类型的数组
let x1: [string, number] 
x1 = ['string',1222]
console.log(x1);