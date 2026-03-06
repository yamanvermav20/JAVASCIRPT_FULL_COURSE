//Some  IMPORTANT BUGS in JavaScript related to typeof operator:

//type of null is object, this is a long-standing bug in JavaScript that has been present since its inception. 
console.log(typeof null); // "object"

//typeof undefined is undefined, this is because undefined is a primitive value that represents the absence of a value or an uninitialized variable. It is not an object, so its type is not "object".
console.log(typeof undefined); // "undefined"


//typeof NaN is number, this is because NaN is a special numeric value that represents an invalid number. It is not an object, so its type is not "object".
console.log(typeof NaN); // "number"

//type of arrays is object, this is because arrays are a type of object in JavaScript. They are used to store multiple values in a single variable and have special properties and methods that allow us to manipulate them.
console.log(typeof []); // "object"



