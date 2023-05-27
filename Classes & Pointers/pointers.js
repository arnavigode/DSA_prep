// without ponters
let num1 = 5;
let num2 = num1;

console.log('num1', num1)
console.log('num2', num2)

num1 = 10;

console.log('num1', num1)
console.log('num2', num2)

// num2 will reamin 5 as we are not using pointers



// with pointers ==>
let obj1 = {
    val: 10
}
let obj2 = obj1;

console.log('obj1', obj1)
console.log('obj2', obj2)

obj1.val = 20;

console.log('obj1', obj1)
console.log('obj2', obj2)

let obj3 = {
    val: 30
}
