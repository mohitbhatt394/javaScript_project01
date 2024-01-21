let marval = ['ironman','thor','spiderman'];
let dc = ['batman','superman','flash'];
// marval.push(dc);
// console.log(marval[3][1]);

// marval = marval.concat(dc);
// console.log(marval);

let all_heros = [...marval,...dc];
// console.log(all_heros);

let numberArray = [1,2,[3,4],[5,6,[7,8]]];
// console.log(numberArray.flat(1));

let convArray = 'mohit';
console.log(Array.isArray(convArray));
console.log(Array.from(convArray));

console.log(Object.keys({name:'bhatt'}));
console.log(Object.values({name:'bhatt'}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));






