// www.typescriptlang.org
// 布尔类型
let bool: boolean = true
// bool = 123

// 数值类型
let num: number = 123
// num = "abc"
num = 0b1111011
num = 0o173
num = 0x7b

// 字符串类型
let str:string
str = "abc"
str = `数值是${num}`
console.log(str);

// 数组类型
// [1, 2, 3]
// 写法1
let arr1: number[]
arr1 = [5]
// 写法2
let arr2: Array<number>
let arr3: (string | number | boolean)[]
arr3 = ["5", 5, false]
console.log(arr3);

// 元祖类型
let tuple: [string, number, boolean]
tuple = ['c', 5, true]
console.log(tuple);

// 枚举
enum  Roles {
    SUPER_ADMIN,
    ADMIN,
    USER,
    EDITOR,
    ONLY_READ = 100
}
// console.log(Roles.SUPER_ADMIN); // 0
// console.log(Roles.ADMIN); // 1
// console.log(Roles.USER); // 2
// console.log(Roles[0]); // SUPER_ ADMIN
// console.log(Roles[1]); // ADMIN
// console.log(Roles[2]); // USER
// console.log(Roles.ONLY_READ);// 100
// console.log(Roles[100]);// ONLY_READ

// any类型
let value: any
value = "abc"
value = 123
value = false
// console.log(value);

const arr4: any[] = [1, "666", false]
// console.log(arr4);

// void类型
const consoleText = (message:string): void=>{
    console.log(message);
}
let v: void
v = undefined
// v = null
consoleText('123');
// console.log(v);

// undefined 和 null
let u:undefined
u = undefined

let n:null
n  = null

// console.log(u);
// console.log(n);

// never类型
/**
 * never类型是任何类型的子类型，never类型的值可以赋给任意类型。
 * **/
let errorFunction = (text:string): never => {
    throw new  Error(text);
}
// let infinitFunction = ():never => {
//     while (true) {}
// }
// let neverVariable = (():never=> {
//     while (true) {
        
//     }
// })()
// num = neverVariable

// object 类型
let  obj = {
    name: "lierxing"
}
let obj2 = obj
obj2.name = "lisi"
console.log(obj2);

// 类型断言
/**
 * jsx 中只能使用as来设置类型
 * **/
const getLength = (target:string | number)=>{
    if ((<string>target).length && (target as string).length === 0) {
        return (<string>target).length
    } else {
        return (<number>target).toString().length
    }
}
// getLength("123")
getLength(1)