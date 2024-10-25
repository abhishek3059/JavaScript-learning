"use strict"; //treats all the code as the modern javascript 
// alert(2+3) // this will not run cause we are using node.js and not in browser    
let no = "33";
let checkNan = "33abc";
let checkUndefined = undefined;
console.log(typeof no);
console.log(typeof(no));
let number = Number(no);
let number1 = Number(checkNan);
let number2 = Number(checkUndefined);
console.table([typeof (no), typeof(checkNan), typeof(checkUndefined)]);
console.table([no,checkNan,checkUndefined]);
console.table([typeof (number), typeof(number1), typeof(number2)]);
console.table([number,number1,number2]);
