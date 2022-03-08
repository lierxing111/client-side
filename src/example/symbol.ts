// symbol类型是基本数据类型，创建一个独一无二的值
const s1 = Symbol();
const s2 = Symbol();
// console.log(s1); // Symble()
// console.log(s1 === s2);// false
const s3 = Symbol('lierxing');
const s4 = Symbol('lierxing');
// console.log(s3 === s4); // false
const s5 = Symbol(5)
// console.log(s5);
// Symbol类型的值是不能做计算的
// s5 + 12

//symbol 类型的值是可以转换成字符串和布尔值，还可以进行隐士转换
const  s6 = Symbol("lierxing")
// console.log(s6.toString()); // Symbol("lierxing")
// console.log(typeof s6.toString()); // string
// console.log(Boolean(s6)); // true
// console.log(!s6);

//es6中允许用变量定义属性值。
let prop = "name";
const info = {
    prop:"lierxing"
}
console.log(info);