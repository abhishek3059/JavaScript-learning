let id = 1123323135343234234n;
let mynos = [1,2,3,4,5,6,7,8];
let myFunction = function(){console.log("this is function");};
let symbol = Symbol('a');
let symbol1 = Symbol('a');
console.table([id, myFunction, mynos, symbol, symbol1]);
console.table([typeof id, typeof myFunction, typeof mynos, typeof symbol, typeof symbol1]);
//primitive datatypes 7in total and all other datatypes are nonprimitive
