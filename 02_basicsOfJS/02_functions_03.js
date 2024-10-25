 /*
 functions can be used in javascript by two way 
1. using normal function declaration and 
2. In an Expression.
 *******************************************************************************************************************
 FUNCTION HOISTING
 The code runs without an error when we call the function with 1st type of declaration then it will give not give
 an error regardless of the position of the function call whether it is before or after the function declaration
 But For Expression Type function declaration this will give an error 
 example below --> 
 
 */

 //function Hoisting 
 //normal Method Declaration
 normalDeclaration(4) // This will not throw an error 
function normalDeclaration(num){
    return num + 1
}
expressionDeclaration(4); //This will throw an error cause we are yet to declare the defination of the function 
// Expression Method Declaration
const expressionDeclaration = function(value){
    return val + 4
}