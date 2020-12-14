// 初级
// function getServe(status: number) {
//     if (status === 0) {
//       return "吃饭";
//     } else if (status === 1) {
//       return "看表演";
//     } else if (status === 2) {
//       return "吃饭+看表演";
//     }
//   }
//   const result = getServe(0);
//   console.log(`我要去${result}`);
// 中级
// const Status = {
//     EAT: 0,
//     SHOW: 1,
//     EATSHOW: 2,
//   };
  
//   function getServe(status: any) {
//     if (status === Status.EAT) {
//       return "吃饭";
//     } else if (status === Status.SHOW) {
//       return "看表演";
//     } else if (status === Status.EATSHOW) {
//       return "吃饭+看表演";
//     }
//   }
  
//   const result = getServe(Status.SHOW);
  
//   console.log(`我要去${result}`);
// 高级
// enum Status {
//     EAT,
//     SHOW,
//     EATSHOW,
//   }
  
//   function getServe(status: any) {
//     if (status === Status.EAT) {
//       return "吃饭";
//     } else if (status === Status.SHOW) {
//       return "看表演";
//     } else if (status === Status.EATSHOW) {
//       return "吃饭+看表演";
//     }
//   }
  
// //   const result = getServe(Status.SHOW);
//   const result = getServe(1);
  
//   console.log(`我要去${result}`);
// 枚举类型的对应值
// const result = getServe(1);

// 默认不从0开始 从1开始
enum Status {
    EAT = 1,
    SHOW,
    EATSHOW,
  }

// 通过下标反查
console.log(Status.EAT, Status[1]);