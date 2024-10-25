/* Immediately Invoked function expression (IIFE)
    (function (value) {
        console.log(`Db Connected`)
    } ) ();
        This Type of function defination will be executed immediately 
        here () -> function declaration wrapped inside  the first parentheisis and the second parentheisis is for
        function execution 
        Therefore this  syntax tells us that as soon as we declare the function it is executed cause of the 
        second parentheisis
        (functionDeclaration)(execution);
        Note : we use this to not include any polluted data from the global scope 
*/
// Arrow Functions : 
(value) => value + 1  // Arrow function
const re = (num) => {return num + 2}

//IIFE
(function one(){
    console.log(`This is IIFE function`)
})();
// if we do not end the function with semicolan the compiler doesnt know where to conclude and the second IIFE 
// function would give an error so when we want to use 2 or more IIFE Type Function Declaration we need to add ';'
// function Declaration and execution as above.
((name) => console.log(`The entry with ${name} name is entered in the database`))("Abhishek");

 