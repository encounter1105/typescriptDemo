// 类的基本使用
class Lady{
    content = "Hi,你好";
    sayHello(){
       return this.content;
    }
}

const goddess = new Lady();
console.log(goddess.sayHello())

// 类的继承

class Gril extends Lady{
    sayHi() {
        return "一个小姐姐";
    }
    // 重写
    sayHello(){
        // return "hello 你好呀!";
        return super.sayHello() + "巴拉巴拉！"
    }

}

const goddess1 = new Gril();
console.log(goddess1.sayHello());
console.log(goddess1.sayHi());


