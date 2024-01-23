let a = 20;
const b = 30;
var c = 40;

{
    let a = 5;
    const b = 10;
    // var c = 15;

    c = 16;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);


function one(){
    let userName = 'mohit';

    function two(){
        let professonal = 'pre';
        console.log(userName);
    }
    // console.log(professonal);

    two()
}
one();

if(true){
    let userName = 'mohit';

    if(userName === 'mohit'){
        let website = 'youtube'
        console.log(`${userName} ${website}`);
    }
    // console.log(website);
}
// console.log(userName);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



console.log(addOne(5));
function addOne(num1){
    return num1 + 1
}

// console.log(addTwo(5,8));
const addTwo = function(num2){
    return num2 + 2
}