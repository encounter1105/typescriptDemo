// class Person{
//     public name:string;
//     constructor(name:string){
//         this.name = name
//     }
// }

// const person = new Person('taiji')
// console.log(person.name)

// 简化写法
// 类继承中构造器的写法 
// class Person{
//     constructor(public name:string){

//     }
// }

// // const person = new Person('taiji')
// // console.log(person.name)
// class Teacher extends Person{
//     constructor(public age:number){
//         super('taiji')
//     }
// }

// const teacher = new Teacher(18)
// console.log(teacher.age)
// console.log(teacher.name)

class Person{}

class Teacher extends Person{
    constructor(public age:number){
        super()
    }
}

const teacher = new Teacher(18)
console.log(teacher.age)