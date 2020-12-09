// 
// function join(first: string | number, second: string | number) {
//     return `${first}${second}`;
//   }
//   join("tech.taiji", ".com.cn");

//   泛型

// function join<Taiji>(first: Taiji, second: Taiji) {
//     return `${first}${second}`;
//   }
//   join < string > ("tech.taiji", ".com.cn");
// number
//   join < number > (1, 2);
// 泛型中数组的使用
// 第一种写法
// function myFun<ANY>(params: ANY[]) {
//     return params;
//   }
//   myFun < string > ["123", "456"];

//   function myFun<ANY>(params: Array<ANY>) {
//     return params;
//   }
//   myFun < string > ["123", "456"];

// function join<T, P>(first: T, second: P) {
//     return `${first}${second}`;
//   }
//   join < number, string > (1, "2");

//   泛型的类型推断
function join<T, P>(first: T, second: P) {
    return `${first}${second}`;
  }
  join(1, "2");