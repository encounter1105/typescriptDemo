interface Waiter {
    anjiao: boolean;
    say: () => {};
  }
  
  interface Teacher {
    anjiao: boolean;
    skill: () => {};
  }

//   类型断言的方式
  function judgeWho(animal: Waiter | Teacher) {
    //   animal.say() 
    if (animal.anjiao) {
        (animal as Teacher).skill();
      }else{
        (animal as Waiter).say();
      }
  }

//   in语法

function judgeWhoTwo(animal: Waiter | Teacher) {
    if ("skill" in animal) {
      animal.skill();
    } else {
      animal.say();
    }
  }

// typeOf方法
function add(first: string | number, second: string | number) {
    // return first + second;
    if (typeof first === "string" || typeof second === "string") {
        return `${first}${second}`;
      }
      return first + second;
  }

//  instanceOf 语法
class NumberObj {
    count: number;
}
function addObj(first: object | NumberObj, second: object | NumberObj) {
    // return first.count + second.count;
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}


