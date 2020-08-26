// function getTotal2(one:number,two:number) :number {
//     return one + two 
// }

// const total2 : number  = getTotal(1,2)

// function sayHello() : void{
//     console.log('Hello World')
//     // return ''
// }

// never返回值类型   如果一个函数是永远也执行不完的，就可以定义返回值为never

// function errorFunction() : never{
//     throw new Error()
//     // 这句话永远执行不到
//     console.log('Hello World')
// }

// // 还有一种情况就是死循环

// function forNever() : never{
//     while(true){}
//     console.log('Hello World')
// }

//  错误示例
// function add({one:number,two:number}) {
//     return one + two
// }

// const total = add({one:1,two:2})

// 传递的参数事一个对象的正确写法 
// function add({one,two} : {one:number,two:number}) {
//     return one + two
// }

// const total = add({one:1,two:2})

// 传递的对象参数只有一个的情况 
function getNumber({one}:{one:number}) {
    return one
}

const one = getNumber({one:11})