// 只读属性 readonly
// class Person {
//     public readonly _name : string;
//     constructor(name:string) {
//         this._name = name;
//     }
// }
// const person = new Person('taiji')
// // person._name = '小明'
// console.log(person._name)

// 抽象类
// abstract class Girl{
//     abstract skill() //因为没有具体的方法，所以我们这里不写括号
// }

class ChineseTeacher extends Girl{
    skill(){
        console.log('我是语文老师！')
    }
}

class MathTeacher extends Girl{
    skill(){
        console.log('我是数学老师！')
    }
}

class EnglishTeacher extends Girl{
    skill(){
        console.log('我是英语老师！')
    }
}
