let count:number;
count = 1234;

let countInference = 123

//  不需要类型注解的例子

const one = 1;
const two = 2;
const three = one + two

// 需要类型注释的例子
function getTotal(one:number,two:number){
    return one + two
}

const total = getTotal(1,2)

// 推断对象中属性类型 中变量的属性

const person = {
    name:'小明',
    age: 18
}

