let temp = 12;
if(temp<16){
    console.log('its too cold outside');
}
else{
    console.log('temp is normal');
}
console.log('it will executed definatally');

// implecit scope
let cardScore = 75;
// if(cardScore>50) console.log('you can invest'),console.log('test 2');

if(cardScore <20){
    console.log('test1');
}
else if(cardScore <50){
    console.log('test1');
}
else if(cardScore <100){
    console.log('test3');
}
else{
    console.log('test4');
}

let isLoggenInGoogle = true;
let isLoggenIn = false;

if(isLoggenIn || isLoggenInGoogle){
    console.log('user logged in');
}

if(isLoggenIn && isLoggenInGoogle){
    console.log('user logged in');
}