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
// let total = addToCart(200,600,700).map(()=>{
//     console.log(total);
// });
