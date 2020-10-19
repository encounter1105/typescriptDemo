class Person {
   protected  name: string;
   public sayHello(){
      console.log(this.name + ' say Hello')
   }
}
// 类的外部调用
// const person = new Person();
// person.name = "taiji";
// person.sayHello()
// console.log(person.name)
class Teacher extends Person{
    public sayBye(){
        this.name
    }
}
 
