class Xiaojiejie {
    constructor(private _age:number){}
    get age(){
        return this._age-10
    }
    set age(age:number){
        this._age = age + 3

    }
}

const xiaohong = new Xiaojiejie(28)
xiaohong.age = 25
console.log(xiaohong.age)

// 类中的static

// class Girl{
//     sayHi() {
//         return "hi 你好"
//     }
// }

// const girl = new Girl();
// console.log(girl.sayHi())

// 使用static声明的属性和方法，不需要声明对象，就可直接使用
class Girl{
    static sayHi(){
        return "Hi 你好"
    }
}
console.log(Girl.sayHi());