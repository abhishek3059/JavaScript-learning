let arr = ["Abhishek", 0, 33, "Shukla", function(){} , {name : "Abhishek"}];
// for(let i = 0; i < arr.length ; i++){
//   console.log(arr[i] + " ");
// }
arr.splice(4,4);
//console.log(arr); // here when we execute this line after 4th position all the elements get deleted 
/* original Array :
Abhishek 
0 
33
Shukla
function(){}
[object Object]
new Array after Splice : [ 'Abhishek', 0, 33, 'Shukla' ] */
// Concat 
const myArr = [2,4];
console.log(myArr.concat([7,8]));
console.log(myArr.concat([3,8],[9,11]));
console.log(myArr.concat([3,7],9,0));
// Spread operator  !better than concat
const myArr2 = ["This","Array", "Should","be","Spread","After 2,4"];
const newArr = [...myArr , ...myArr2];  //better than concat cause we can work with multiple values instead of only 2
console.log(newArr);
