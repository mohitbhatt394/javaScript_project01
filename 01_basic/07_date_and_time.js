let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());

let myDate = new Date('01-14-2023');
console.log(myDate);

let newDate = Date.now();
console.log(newDate);
console.log(myDate.getTime());

let getTime = new Date();
console.log(getTime.getDate());
console.log(getTime.getDay()+1);
console.log(getTime.getMonth());

console.log(getTime.toLocaleString('default',{
    weekday:"long"
}));



