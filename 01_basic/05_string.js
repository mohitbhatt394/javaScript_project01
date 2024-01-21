let firstName = 'mohit';
let repocount = 20;
console.log(firstName + repocount);

console.log(`my name is ${firstName} and my repo count is ${repocount}`);

let frsh = new String('another');
console.log(frsh[0]);
console.log(frsh.__proto__);

console.log(frsh.length);
console.log(frsh.toUpperCase());
console.log(frsh.charAt(4));
console.log(frsh.indexOf('o'));
console.log(frsh.substring(0,3));
console.log(frsh.slice(-2,7));

let newStr = ' \n trim method ';
console.log(newStr);
console.log(newStr.trim());

let replaceVal = 'https://mohitbhatt.com/another20%name';
console.log(replaceVal.replace('20%', '-'));

console.log(replaceVal.includes('mohit'));

let toCovertArray = 'mo-hi-tb-ha-tt';
console.log(toCovertArray.split('-'));