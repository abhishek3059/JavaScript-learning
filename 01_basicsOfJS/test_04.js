const score = new Number(100);
console.log(score);
console.log(score.toString());
// creating random numbers between 1 and 6;
// dice 
const min = 1;
const max = 6;
const random = Math.floor(Math.random() * (max - min + 1) + min);
console.log(random);