// 接口（Interface）

// 简历自动筛选程序  假定学历=2 表示硕士
// const screenResume = (name:string, age:number,enducation:number) => {
//     age<40 && enducation>=2 && console.log( name + '进入面试')
//     age>40 || enducation<2 && console.log( name + '你被淘汰')
// }

// const getResume=(name:string,age:number,enducation:number)=>{
//     console.log(name+'年龄是：'+age)
//     console.log(name+'学历是：'+enducation)
// }
// getResume('小红',18,2)

// screenResume('小明',19,1)

// interface Interviewee{
//     name: string;
//     age: number;
//     enducation: number
// }

// const interviewee = {
//     name:'小红',
//     age:20,
//     enducation: 2
// }

// const screenResume = (interviewee:Interviewee) => {
//     interviewee.age<40 && interviewee.enducation>=2 && console.log( interviewee.name + '进入面试')
//     interviewee.age>40 || interviewee.enducation<2 && console.log( interviewee.name + '你被淘汰')
// }

// const getResume=(interviewee:Interviewee)=>{
//     console.log(interviewee.name+'年龄是：'+interviewee.age)
//     console.log(interviewee.name+'学历是：'+interviewee.enducation)
// }
// getResume(interviewee)

// screenResume(interviewee)

// // 类型别名和接口的区别  类型别名可以直接给类型，比如string，而接口必须代表对象。
// // 类型别名
// type Girl = string 
// //  接口
// const girl={
//     name:'大脚',
//     age:18,
//     bust:94
// }
// //  接口的可选属性
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = { color: "white", area: 100 };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
 
// let mySquare = createSquare({ color: "black",width: 20});
// console.log(mySquare);