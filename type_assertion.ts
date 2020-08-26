// const foo = {}
// foo.bar = 123;   //bar属性不存在与{}
// foo.bas = 'hello';   //bas属性不存在与{}

interface Foo {
    bar:number;
    bas: string;
}

const foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';

// "尖括号"语法3

// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;

//  as语法 

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// 类型断言的使用

// function func(val: string | number): number {
//     if (val.length) {
//       return val.length
//     } else {
//       return val.toString().length
//     }
//   }

function func(val: string | number): number {
    if ((val as string).length) {
      return (val as string).length
    } else {
      return val.toString().length
    }
  }

//   双重断言 了解如参数更具体的类型 时

// function handler(event : Event){
//     const mouseEvent = event as MouseEvent;
// }

// function handler(event: Event){
//     const element = event as HTMLElement; 
//     // Eventhe HTMLEvent中的任何一个都不能被赋值给另外一个 可使用双重断言
// }

function handler(event: Event){
    const element = (event as unknown) as HTMLElement; 
}
