let userEmail = 'mohitbhatt@gmail.com';
if(userEmail){
    console.log('got an email');
}
else{
    console.log('not got an email');
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// true, "0", "false", " ", [] , {}, function(){}

let arr = [];
if(arr.length === 0){
    console.log('array is empty');
}

let obj = {};
if(Object.keys(obj).length === 0){
    console.log('object is empty is empty');
}

// nullish coalescing oprater
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 10;
console.log(val1);

//terniary oprater
let score = 200;
score>100 ? console.log('you can fly') : console.log('you cannot fly');