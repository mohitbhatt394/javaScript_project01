let user = {
    firstName:'mohit',
    age:18,

    getAlluser: function(){
        console.log(`hello ${this.firstName}`);
        console.log(this);
    }
}
user.getAlluser();
user.firstName = 'sam';
user.getAlluser();

console.log(this);

// function chai(){
//     let user = 'mohit'
//     console.log(this.user);
// }

const chai = () =>{
    let user = 'mohit';
    console.log(this.user);
    console.log(this);

}
chai()

const addTwo = (a,b) =>{
    return a+b
}
console.log(addTwo(3,4))

//implicit return
const addnum = (a,b) => a+b
console.log(addnum(5,4));

//or
const addnum2 = (a,b) => (a+b);
console.log(addnum2(5,6));

const userData = () => ({userName: 'mohit'});
console.log(userData());


