let count : number = 1;
//count 继承了number上面的所有属性和方法 

interface People {
    uname: string,
    age: number
}

const xiaoming: People = {
    uname:'小明',
    age: 18
}

console.log(xiaoming.age + xiaoming.uname)