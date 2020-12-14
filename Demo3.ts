// const count:number = 818;
const myName:string = 'liangjuan';
// null ,undefined ,symbol, boolean,void 等都是基础静态类型

//对象类型
const people:{
    name:string,
    age:number
} = {
    name:'xiaohong',
    age:18
}

console.log(people.name)

//  数组对象类型
const person : String[] = ['xiaoming','xiaohong','xiaoli']

// 类类型
class animal{}
const dog:animal = new animal()

// 函数类型
const xiaogege: () => string = () => { return 'xiaoming'}
