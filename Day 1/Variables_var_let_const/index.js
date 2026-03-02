//var, let and const in javascript
//Es6 introduced let and const to provide better scoping rules and immutability options compared to var.

//var is function scoped and can be redeclared and updated
var x = 10;
console.log(x);
var x = 20; // redeclaration
console.log(x);
x = 30; // update
console.log(x);

//let is block scoped and can be updated but not redeclared
let y = 10;
console.log(y); 
//let y = 20; // redeclaration error    
y = 30; // update
console.log(y);

//const is block scoped and cannot be redeclared or updated
const z = 10;
console.log(z);
//const z = 20; // redeclaration error
//z = 30; // update error   