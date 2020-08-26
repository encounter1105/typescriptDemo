// 类型推断
// const numberArr = [1,2,3]

const numberArr :number[]= [1,2,3]

// 字符传数组
const stringArr : string[] = ['a','b','c']

// undedined数组
const undefinedArr : undefined[] = [undefined,undefined]

// 混合数组
const arr: ( number| string )[] = [1,'string',2]

// 数组对象
// const xiaoJieJies : {name:string , age:Number}[] = [
//     {name:'小红',age:18},
//     {name:'小花',age:28}
// ]

type  Lady  =  {name:string , age:Number};

class Madam { 
    name: string;
    age: number
}

const xiaoJieJies : Madam[] = [
    {name:'小红',age:18},
    {name:'小花',age:28}
]