//Hoisting var : var is hoisted but not initialized
//Java code runs in two phases: compilation and execution. During the compilation phase, variable and function declarations are hoisted to the top of their scope. However, only the declarations are hoisted, not the initializations. This means that if you try to access a variable declared with var before it is initialized, it will return undefined instead of throwing an error.

console.log(a + 10); // undefined + 10 = NaN
console.log(a); // undefined
var a = 10;
console.log(a); // 10




//Hoisting let and const : let and const are hoisted but not initialized
//Variables declared with let and const are also hoisted to the top of their block scope, but they are not initialized until their declaration is evaluated. This means that if you try to access a variable declared with let or const before it is initialized, it will throw a ReferenceError.
//let and const are in a "temporal dead zone" from the start of the block until the declaration is processed, which prevents access to the variable before it is declared.

console.log(b + 10); // ReferenceError: Cannot access 'b' before initialization
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20