interface Interviewee{
    name: string;
    age: number;
    enducation: number;
    [propname:string] : any;
    say(): string
}


// 类

class Xiaojiejie implements Interviewee{
    name='小花'
    age=20
    enducation= 2
    sex='女'
    say(){
        return "希望我能加入贵公司"
    }
}

interface Teacher extends Interviewee{
    teach() : string
}

const interviewee = {
    name:'小红',
    age:20,
    enducation: 2,
    sex:'女',
    say(){
        return "希望我能加入贵公司"
    },
    teach(){
        return "我负责前端教学"
    }
}

const screenResume = (interviewee:Interviewee) => {
    interviewee.age<40 && interviewee.enducation>=2 && console.log( interviewee.name + '进入面试')
    interviewee.age>40 || interviewee.enducation<2 && console.log( interviewee.name + '你被淘汰')
}

const getResume=(interviewee:Teacher)=>{
    console.log(interviewee.name+'年龄是：'+interviewee.age)
    console.log(interviewee.name+'学历是：'+interviewee.enducation)
    // console.log(interviewee.teach())
    interviewee.sex && console.log(interviewee.name+'性别是：'+interviewee.sex)
}
getResume(interviewee)

screenResume(interviewee)

// 类型别名和接口的区别  类型别名可以直接给类型，比如string，而接口必须代表对象。
// 类型别名
type Girl = string 
//  接口
const girl={
    name:'大脚',
    age:18,
    weight:94
}
