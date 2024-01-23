//singleton

//objects literals
let mySym = Symbol('key1');
const jsUser = {
    firsName: 'mohit bhatt',
    lastLogginDays: ['monday', 'saturday'],
    age: 18,
    isLoggedIn: true,
    [mySym]: 'myKey'
}
console.log(jsUser['firsName']);
console.log(jsUser.isLoggedIn);
console.log(jsUser.lastLogginDays[0]);
console.log(typeof jsUser[mySym]);

jsUser.age = 20;
console.log(jsUser.age);

// Object.freeze(jsUser);
jsUser.age = 34;
console.log(jsUser);

jsUser.greeting = function(){
    console.log(`thanku all ${this.firsName}`);
}
console.log(jsUser);
console.log(jsUser.greeting);
console.log(jsUser.greeting());
