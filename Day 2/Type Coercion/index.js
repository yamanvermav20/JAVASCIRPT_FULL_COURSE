//Type Coercion (==) vs Strict Equality (===)
// == -> checks for value equality, performs type coercion if necessary
// === -> checks for both value and type equality, no type coercion

//type coercion is the process of converting a value from one type to another. In JavaScript, this can happen implicitly when using the == operator, which can lead to unexpected results. For example:
console.log(5 == '5'); // true, because '5' is coerced to 5
console.log(0 == false); // true, because false is coerced to 0
console.log(null == undefined); // true, because null and undefined are considered equal in type coercion
console.log('' == 0); // true, because '' is coerced to 0


let a = "5" + 5; // '55', because 5 is coerced to '5' and concatenated
let b = "5" - 5; // 0, because '5' is coerced to 5 and subtracted


//!!!***!!!
// 0 false "" null undefined Nan document.all -> falsy values because they are coerced to false in a boolean context we can check for falsy values using if statement
// all other values are truthy



//!!**!!
//typeof NaN; // "number", because NaN is a special numeric value that represents an invalid number
//NaN is the result of an invalid mathematical operation, such as dividing zero by zero or taking the square root of a negative number. It is important to note that NaN is not equal to any value, including itself, which can lead to some unexpected behavior when comparing values in JavaScript. For example:
console.log(NaN == NaN); // false, because NaN is not equal to itself
console.log(NaN === NaN); // false, for the same reason


//Implicit vs Explicit Coercion in short
//Implicit coercion happens when JavaScript automatically converts a value from one type to another
console.log(5 + '5'); // '55', because 5 is coerced to '5' and concatenated
//Explicit coercion happens when we manually convert a value from one type to another using functions like Number(), String(), Boolean(), etc.
console.log(Number('5')); // 5, because '5' is explicitly converted to a number 