// 编写一个基本类
// class SelectGirl {
//     constructor(private girls: string[]) {}
//     getGirl(index: number): string {
//       return this.girls[index];
//     }
//   }
  
//   const selectGirl = new SelectGirl(["小红", "小花", "小美"]);
//   console.log(selectGirl.getGirl(1));

// class SelectGirl {
//   constructor(private girls: string[] | number[]) {}
//   getGirl(index: number): string | number {
//     return this.girls[index];
//   }
// }

// 初始类的泛型 使用泛型重构上面类代码
// class SelectGirl<T> {
//   constructor(private girls: T[]) {}
//   getGirl(index: number): T {
//     return this.girls[index];
//   }
// }

// const selectGirl = new SelectGirl(["小红", "小花", "小美"]);
// // // 实例化的时候对泛型的值确定
// const selectGirl = new SelectGirl()< string > ["小红", "小花", "小美"];
// console.log(selectGirl.getGirl(1));

// 泛型中的继承
interface Girl {
  name: string;
}

// class SelectGirl<T extends Girl> {
//   constructor(private girls: T[]) {}
//   getGirl(index: number): string {
//     return this.girls[index].name;
//   }
// }

// const selectGirl = new SelectGirl([
//   { name: "小红" },
//   { name: "小花" },
//   { name: "小美" },
// ]);
// console.log(selectGirl.getGirl(1));

// 泛型约束
class SelectGirl<T extends number | string> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index];
  }
}

// const selectGirl = new SelectGirl<string>(["小红", "小花", "小美"]);
// console.log(selectGirl.getGirl(1));


