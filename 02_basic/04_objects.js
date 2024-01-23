let tinder = new Object();

tinder.id = '123';
tinder.firstName = 'mohit';
console.log(tinder);

let UserData = {
    userFullName: {
        firstName: 'mohit',
        lastName: 'bhatt'
    }
}
console.log(UserData.userFullName);
console.log(UserData.userFullName?.firstName);

obj1 = {1:'a',2:'b'};
obj2 = {3:'c',3:'d'};

let obj3 = Object.assign({},obj1,obj2);
// let obj3 = {...obj1, ...obj2};
console.log(obj3);

const userData2 = [
    {
        id:1,
        email:'mohit123@google.com'
    },
    {
        id:2,
        email:'mohit456@google.com'
    },
    {
        id:3,
        email:'mohit89@google.com'
    }
];
console.log(userData2[1].email);
console.log(Object.keys(userData2[1]));
console.log(Object.values(userData2[1]));
console.log(userData2[0].hasOwnProperty('email'));


let course = {
    courseName: 'jsTut',
    coursePrice: 899,
    courseInsturtor: 'mohit'
}
let { courseName, coursePrice, courseInsturtor } = course;
let { courseInsturtor: inst } = course
console.log(courseName, coursePrice, inst);

//JSON
// {
//     "name":"mohit",
//     "price": 90,
//     "platform": "youtube"
// }

// [
//     {
//         "name": "mohit",
//         "price": 90,
//         "platform": "youtube"
//     },
//     {
//         "name": "mohit",
//         "price": 90,
//         "platform": "youtube"
//     },
//     {
//         "name": "mohit",
//         "price": 90,
//         "platform": "youtube"
//     } 
// ]

