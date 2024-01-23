function sayMyName(){
    console.log('m');
    console.log('o');
    console.log('h');
    console.log('i');
    console.log('t');
}
// sayMyName();

function add(a,b){
    console.log(a+b);
}
add(3,6);

function sub(a,b){
    return a-b;
}
let result = sub(1,4);
console.log(`result: ${result}`);

function logIn(userName='sam'){
if(userName === undefined || !userName){
    console.log('please enter your name first');
    return
}
return `${userName} just loggedIn`
}
console.log(logIn());


function addToCart(...num1){
    return num1
}


// let user = {
//     name: 'rohan',
//     files: 188
// }
// function show(data){
//     console.log(`my name is ${data.name} and my files count is ${data.files}`);
// }
// show(user);

function show(data){
    console.log(`my name is ${data.name} and my files count is ${data.files}`);
}
show({
    name: 'rohan',
    files: 188
});

const myNewArray = [200, 400, 100, 600]
function arrayMeth(newArry){
    return newArry[1]
}
console.log(arrayMeth(myNewArray))