let score = 400;
console.log(score);

let litralnum = new Number(100);
console.log(litralnum);

console.log(litralnum.toString());
console.log(score.toFixed(2));

let point = 23.7896
console.log(point.toPrecision(3));

let price = 10000;
console.log(price.toLocaleString('en-IN'));

// ++++++++++++++++++ Maths  ++++++++++++++++++++++++++
console.log(Math.abs(-7));
console.log(Math.round(4.51));
console.log(Math.floor(4.51));
console.log(Math.ceil(4.30));
console.log(Math.min(4,6,9,3));
console.log(Math.max(4,6,9,3));
console.log(Math.random());
console.log(Math.round(Math.random()*10) + 1);

let min = 10;
let max = 20;
console.log(Math.floor(Math.random()*(max-min+1)) + min);
